# Typescript Express Starter

Small Express 5 starter for building TypeScript APIs with fast local feedback and sensible defaults.

## What's included

- Express 5 with ESM and TypeScript
- Environment loading and validation with `dotenv` + `zod`
- Health check route at `GET /health`
- Development server with restart-on-change and type-check watch
- ESLint, Prettier, Husky, and lint-staged

## Requirements

- Node.js version from `.node-version` / `.nvmrc`.
- pnpm as node package manager

## Setup

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Server starts on `http://localhost:8000` unless `PORT` is changed.

## Environment

```env
PORT=8000
NODE_ENV=development
```

| Variable   | Default       | Notes                                          |
| ---------- | ------------- | ---------------------------------------------- |
| `PORT`     | `8000`        | Port the server listens on                     |
| `NODE_ENV` | `development` | Must be `development`, `production`, or `test` |

Invalid environment values fail fast during startup.

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

## API

### Health check

```http
GET /health
```

```json
{ "status": "ok" }
```

## Project structure

```text
src/
├── config.ts          # environment schema and parsed config
├── main.ts            # app setup and server startup
├── middleware/        # shared Express middleware
├── routes/            # route modules
│   └── health.ts
└── services/          # business logic and integrations
```

## License

MIT
