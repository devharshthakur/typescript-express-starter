# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-06-25

### 🚀 Enhancements

- **tsdown:** Use tsdown instead of tsc for building the project ([a29e7a9](https://github.com/devharshthakur/typescript-express-starter/commit/a29e7a9))
- Migrate to tsdown, add CI/release workflow, refactor project structure ([#1](https://github.com/devharshthakur/typescript-express-starter/pull/1))
- **main:** Add body parsers, error handler, and graceful shutdown ([9dd22ad](https://github.com/devharshthakur/typescript-express-starter/commit/9dd22ad))
- **tests:** Add tests for starter code ([cb4ae64](https://github.com/devharshthakur/typescript-express-starter/commit/cb4ae64))

### 🔥 Performance

- **docker:** Add folders to .dockerignore ([c2f7992](https://github.com/devharshthakur/typescript-express-starter/commit/c2f7992))

### 🩹 Fixes

- **tsdown:** Changed alias from $middleware to $middlewares ([9c4d3c2](https://github.com/devharshthakur/typescript-express-starter/commit/9c4d3c2))
- **typescript:** Exclude build folder ([1b4f608](https://github.com/devharshthakur/typescript-express-starter/commit/1b4f608))
- **docker:** Simplify docker build pipeline ([b76e945](https://github.com/devharshthakur/typescript-express-starter/commit/b76e945))
- Update relevant scripts ([3b8bb9d](https://github.com/devharshthakur/typescript-express-starter/commit/3b8bb9d))
- **package.json:** Add node engine settings and using experimental cli ode for prettier ([9d2e025](https://github.com/devharshthakur/typescript-express-starter/commit/9d2e025))
- **setup:** Update pnpm lockfile as well ([b5b410e](https://github.com/devharshthakur/typescript-express-starter/commit/b5b410e))
- **greet:** Use zod schema validation for query paramenter ([a9cff6a](https://github.com/devharshthakur/typescript-express-starter/commit/a9cff6a))
- **vitest:** Setup the coverage command ([2599a49](https://github.com/devharshthakur/typescript-express-starter/commit/2599a49))
- **ci:** Using latest pnpm setup action ([8f550dc](https://github.com/devharshthakur/typescript-express-starter/commit/8f550dc))

### 💅 Refactors

- Move middlewares and services to root (src) ([8ff2620](https://github.com/devharshthakur/typescript-express-starter/commit/8ff2620))
- Rewritten update script in typescript ([dc2f807](https://github.com/devharshthakur/typescript-express-starter/commit/dc2f807))
- Rewritten setup script in typescript ([764284e](https://github.com/devharshthakur/typescript-express-starter/commit/764284e))
- Rename files and a request logger middlware ([936eaa0](https://github.com/devharshthakur/typescript-express-starter/commit/936eaa0))
- **routes:** Moved routes.ts inside routes folder ([252d2ce](https://github.com/devharshthakur/typescript-express-starter/commit/252d2ce))

### 📖 Documentation

- Update CHANGELOG.md ([3b19514](https://github.com/devharshthakur/typescript-express-starter/commit/3b19514))
- Update README.md ([34a0d54](https://github.com/devharshthakur/typescript-express-starter/commit/34a0d54))
- **docker:** Add comments in dockerfile ([c17baec](https://github.com/devharshthakur/typescript-express-starter/commit/c17baec))

### 🏡 Chore

- Update config files ([688ed34](https://github.com/devharshthakur/typescript-express-starter/commit/688ed34))
- Remove incorrect file-based ruleset attempt ([aecd921](https://github.com/devharshthakur/typescript-express-starter/commit/aecd921))
- **scripts:** Add update script ([e3ee5c8](https://github.com/devharshthakur/typescript-express-starter/commit/e3ee5c8))
- Bump deps ([0cc6786](https://github.com/devharshthakur/typescript-express-starter/commit/0cc6786))
- **changelog:** Replace git-cliff config with changelogen config file ([9a3eab1](https://github.com/devharshthakur/typescript-express-starter/commit/9a3eab1))
- Format and lint ([de02af4](https://github.com/devharshthakur/typescript-express-starter/commit/de02af4))
- Replace git-cliff with changelogen, rewrite scripts in TypeScript, add setup script ([f625b1d](https://github.com/devharshthakur/typescript-express-starter/commit/f625b1d))
- **vscode/settings.json:** Add configs ([0b167b5](https://github.com/devharshthakur/typescript-express-starter/commit/0b167b5))
- **tsconfig:** Cleanup ([d9fae8a](https://github.com/devharshthakur/typescript-express-starter/commit/d9fae8a))
- Bump deps ([11e2eb2](https://github.com/devharshthakur/typescript-express-starter/commit/11e2eb2))
- Install deps ([25a8c14](https://github.com/devharshthakur/typescript-express-starter/commit/25a8c14))
- **vitest:** Add config file ([4e31e12](https://github.com/devharshthakur/typescript-express-starter/commit/4e31e12))

### 🤖 CI

- Add release workflow with git-cliff changelog generation ([748ceb3](https://github.com/devharshthakur/typescript-express-starter/commit/748ceb3))
- **release.yaml:** Replace git-cliff with changelogen based setup ([32b30f0](https://github.com/devharshthakur/typescript-express-starter/commit/32b30f0))

### ❤️ Contributors

- Harsh Thakur ([@devharshthakur](https://github.com/devharshthakur))

## [1.2.0] - 2026-06-07

### Added

- Add jsdoc comment

### Changed

- Update `CHANGELOG.md`
- Rename folder `middleware` to `middlewares`
- Docker setup
- `v1.2.0`

## [1.1.0] - 2026-06-07

### Added

- Add path aliases and tsc-alias for build-time resolution

### Changed

- `CHANGELOG.md`
- Restructure under lib/ and add greet example route
- Rewrite README and add ARCHITECTURE.md
- Centralize shared router in src/routes.ts
- Plain routers in route files, mount centralized in routes.ts
- Format
- `v1.0.0`

## [1.0.0] - 2026-06-07

### Added

- Add env validation using dotenv + zod

### Changed

- Initial commit
- Project setup
- Rewrite README with full project documentation
- Versioning the project
- Git-cliff config

### Removed

- Remove redundant tabWidth from prettier config

[1.3.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.2.0..v1.3.0
[1.2.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.1.0..v1.2.0
[1.1.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.0.0..v1.1.0
[1.0.0]: https://github.com/devharshthakur/typescript-express-starter/tree/v1.0.0
