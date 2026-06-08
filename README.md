# TypeScript Express Starter

An Express 5 starter template using typescript with prebuilt defaults and configurations. It is exensable to any extent. 

## What's included

- Latest version of Express
- Environment Variables are validated runtime, server is stoped if any of the required Environment variables is absent
- Development server with HMR (Using Nodemon pre configured) and type checking (using `tsc`) both concurrently
- Linting , formatting, precommit hooks all setup and extensable.

## Requirements

- Latest LTS Node.js version as noted in `.node-version` / `.nvmrc`.
- pnpm is used as node package manager here

## Setup
1. Copy the `.env.sample` file to a `.env` file

```bash
cp .env.example .env
```

2. Install dependencies using `pnpm` from root

```bash
pnpm install
```
>[!IMPORTANT]
Server by default starts on `PORT` 8000 unless `PORT` env var is changed.
You can access the server on : `http://localhost:8000`

## Environment Variabels

| Variable   | Default       | Notes                                          |
| ---------- | ------------- | ---------------------------------------------- |
| `PORT`     | `8000`        | Port the server listens on                     |
| `NODE_ENV` | `development` | Must be `development`, `production`, or `test` |

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
