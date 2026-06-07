# TypeScript Express Starter

Small Express 5 starter for building TypeScript APIs with fast local feedback and sensible defaults.

## What's included

- Express 5 with ESM and TypeScript
- Environment validation with `dotenv` + `zod`
- Health check route at `GET /health`
- Development server with restart-on-change and type-check watch
- ESLint, Prettier, Husky, and lint-staged

## Requirements

- Latest LTS Node.js version from `.node-version` / `.nvmrc`.
- pnpm as node package manager

## Setup

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Server by default starts on `PORT` 8000 unless `PORT` env var is changed.
You can access the server on : `http://localhost:8000`

## Environment

| Variable   | Default       | Notes                                          |
| ---------- | ------------- | ---------------------------------------------- |
| `PORT`     | `8000`        | Port the server listens on                     |
| `NODE_ENV` | `development` | Must be `development`, `production`, or `test` |

Invalid environment values fail fast during startup. See `src/config.ts` for the zod schema.

## Scripts

```bash
pnpm dev           # run server with nodemon and type-check watch
pnpm build         # compile TypeScript to build/
pnpm start         # build and run the compiled server
pnpm typecheck     # run TypeScript without emitting files
pnpm lint          # run ESLint
pnpm format        # format files with Prettier
pnpm format:check  # check formatting
pnpm check         # typecheck, lint, and format check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for project structure, startup flow, routing conventions, development workflow, tooling details, and design decisions.

## License

This project is licensed under [MIT](./LICENSE)
