# Architecture

## Tech stack

| Layer           | Technology                                             |
| --------------- | ------------------------------------------------------ |
| Runtime         | Node.js (latest LTS, see `.node-version` / `.nvmrc`)   |
| Package manager | pnpm                                                   |
| Language        | TypeScript 6 (strict mode)                             |
| Module system   | ESM (`"type": "module"`, `NodeNext` resolution)        |
| Framework       | Express 5                                              |
| Env validation  | `dotenv` + `zod`                                       |
| Dev server      | `tsx` + `nodemon` + `tsc --watch` (via `concurrently`) |
| Linting         | ESLint (`typescript-eslint` type-checked rules)        |
| Formatting      | Prettier                                               |
| Git hooks       | Husky + lint-staged                                    |

## Project structure

```text
src/
├── config.ts          # Environment schema (zod), parsed config export
├── main.ts            # Express app creation, middleware/route registration, listen
├── middleware/        # Shared Express middleware modules
├── routes/            # Express Router modules (one per resource)
│   └── health.ts     #   GET /health
└── services/          # Business logic and external integrations

scripts/
├── dev.ts             # concurrently spawns nodemon + tsc --watch

build/                 # Compiled output (tsc outDir)
```

### Conventions

- **Routes** live in `src/routes/`, one file per resource. Each exports a default `Router` that the main app mounts.
- **Middleware** lives in `src/middleware/` and is shared across routes.
- **Services** in `src/services/` encapsulate business logic and external integrations. Kept separate from Express handlers for testability and separation of concerns.

## Startup flow

1. `src/config.ts` is imported → loads `dotenv/config` → validates `process.env` against a zod schema → exports parsed `config` object
2. `src/main.ts` imports `config`, creates the Express app, registers middleware and routes, then calls `app.listen(config.PORT)`
3. If env validation fails (missing vars, wrong types), the process exits immediately with a tree-formatted error

```text
process.env ──► dotenv ──► zod schema ──► config export ──► main.ts
                                              │
                                         invalid → exit(1)
```

## Routing

- Each route module exports a default `Router` bound to its prefix
- Route modules are mounted in `src/main.ts` via `app.use(router)`
- No prefix-scoping on mount — handlers define their own full paths (e.g., `/health`)

Example:

```typescript
// src/routes/health.ts
const router = Router();
router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
export default router;

// src/main.ts
app.use(healthRouter);
```

## Environment

| Variable   | Schema                                          | Default         |
| ---------- | ----------------------------------------------- | --------------- |
| `PORT`     | `z.coerce.number().int().positive()`            | `8000`          |
| `NODE_ENV` | `z.enum(["development", "production", "test"])` | `"development"` |

## Development workflow

`pnpm dev` runs `scripts/dev.ts`, which uses `concurrently` to spawn two parallel watchers:

| Watcher       | Command                | Purpose                          |
| ------------- | ---------------------- | -------------------------------- |
| **server**    | `nodemon`              | Restarts server on `.ts` changes |
| **typecheck** | `tsc --noEmit --watch` | Reports type errors on save      |

`nodemon` is configured in `nodemon.json`:

- Watches `src/` for `.ts` files
- Executes `tsx src/main.ts` on change

## Build & production

```bash
pnpm build     # tsc → build/
pnpm start     # tsc && node build/main.js
```

`tsconfig.json` targets `es2025` with `NodeNext` module resolution, outputs to `build/` from `src/`.

## Tooling

### ESLint

- Extends `@eslint/js` recommended + `typescript-eslint` type-checked rules
- Uses project-level type information via `projectService`
- Ignores `build/`, `node_modules/`, `coverage/`
- Underscore-prefixed `_` ignores unused variables
- Prettier config merged in via `eslint-config-prettier`

### Prettier

- Semicolons on, double quotes, trailing commas everywhere, 100 char width

### lint-staged + Husky

- `pre-commit` hook runs lint-staged
- `.lintstagedrc.mjs` runs `eslint --fix` and `prettier --write` on staged files

### CI-quality check

```bash
pnpm check   # tsc --noEmit && eslint . && prettier --check .
```

## Design decisions

- **Fail-fast environment** — invalid env kills the process at startup rather than running with broken config
- **Type-checked ESLint** — `typescript-eslint` recommended type-checked rules catch type-level issues in lint, not just syntax
- **Modular structure** — routes, middleware, and services are separated to keep Express concerns distinct from business logic
- **No prefix-scoping on route mount** — routes define their own full paths, keeping them self-contained and grep-friendly
- **ESM + NodeNext** — uses modern Node.js ESM with `.js` extension imports as required by NodeNext resolution
- **Concurrent dev watchers** — type-check and server restart run in parallel so type errors appear without blocking server iteration
