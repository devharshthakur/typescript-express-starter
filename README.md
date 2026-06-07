# Express Starter

Minimal Express 5 + TypeScript starter using ESM, pnpm, ESLint, and Prettier.

## Setup

```bash
pnpm install
pnpm dev
```

Health check:

```text
GET http://localhost:3000/health
```

Response:

```json
{ "status": "ok" }
```

Use another port:

```bash
PORT=8080 pnpm dev
```

## Scripts

```bash
pnpm dev            # start dev server with type-check watch
pnpm build          # compile TypeScript
pnpm start          # build and run production server
pnpm typecheck      # type-check only
pnpm lint           # run ESLint
pnpm format         # format files
pnpm format:check   # check formatting
pnpm check          # typecheck + lint + format check
```

## Structure

```text
src/
├── main.ts
└── routes/
    └── health.ts
```

## Notes

- Local ESM imports need `.js` extensions in TypeScript files.
- Add routes in `src/routes/` and mount them in `src/main.ts`.
- No database, auth, test runner, Docker, or CI is included by default.

## License

MIT
