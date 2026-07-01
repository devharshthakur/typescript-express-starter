# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-07-01

### Added
- Add self delete bash scripts by @devharshthakur

### Changed
- Merge branch 'fixes' by @devharshthakur
- Changes filetype to `.js` from `.mjs` by @devharshthakur
- Created setup script test pipeline by @devharshthakur
- Rewritten setup script in bash by @devharshthakur
- Rewritten by @devharshthakur
- Rewrite workflows by @devharshthakur
- Shift to `git-cliff` from `changelogen` by @devharshthakur
- Update changelog for v1.3.2 by @github-actions[bot]

### Fixed
- Test-setup pipeline by @devharshthakur

### Removed
- Removed update script by @devharshthakur
- Removed changelogen scripts by @devharshthakur

### New Contributors
* @github-actions[bot] made their first contribution

## [1.3.2] - 2026-06-24

### Fixed
- Updates the `changelog` file and commit it as well by @devharshthakur

## [1.3.1] - 2026-06-24

### Fixed
- Using plain changelogen + --from/--to approach by @devharshthakur

## [1.3.0] - 2026-06-24

### Added
- Add tests for starter code by @devharshthakur
- Add config file by @devharshthakur
- Add body parsers, error handler, and graceful shutdown by @devharshthakur
- Add folders to `.dockerignore` by @devharshthakur
- Add comments in `dockerfile` by @devharshthakur
- Add update script by @devharshthakur
- Add release workflow with git-cliff changelog generation by @devharshthakur

### Changed
- Merge pull request #5 from devharshthakur/feat/tests by @devharshthakur in [#5](https://github.com/devharshthakur/typescript-express-starter/pull/5)
- Install deps by @devharshthakur
- Merge pull request #4 from devharshthakur/fixes by @devharshthakur in [#4](https://github.com/devharshthakur/typescript-express-starter/pull/4)
- Bump deps by @devharshthakur
- Cleanup by @devharshthakur
- Moved `routes.ts` inside `routes` folder by @devharshthakur
- Rename files and a request logger middlware by @devharshthakur
- Add configs by @devharshthakur
- Replace `git-cliff` with `changelogen` based setup by @devharshthakur
- Merge branch 'main' of https://github.com/devharshthakur/typescript-express-starter by @devharshthakur
- Replace git-cliff with changelogen, rewrite scripts in TypeScript, add setup script by @devharshthakur in [#3](https://github.com/devharshthakur/typescript-express-starter/pull/3)
- Format and lint by @devharshthakur
- Rewritten setup `script` in typescript by @devharshthakur
- Rewritten update script in typescript by @devharshthakur
- Replace `git-cliff` config with `changelogen` config file by @devharshthakur
- Merge pull request #2 from devharshthakur/docker/simplify by @devharshthakur in [#2](https://github.com/devharshthakur/typescript-express-starter/pull/2)
- Merge branch 'dev' by @devharshthakur
- Migrate to tsdown, add CI/release workflow, refactor project structure by @devharshthakur in [#1](https://github.com/devharshthakur/typescript-express-starter/pull/1)
- Merge branch 'refactor/use-rolldown' into dev by @devharshthakur
- Use tsdown instead of tsc for building the project by @devharshthakur
- Move middlewares and services to root (src) by @devharshthakur
- Bump deps by @devharshthakur
- Create dev branch and prevent auto-deletion with GitHub ruleset by @devharshthakur
- Update `README.md` by @devharshthakur
- Update config files by @devharshthakur
- Update `CHANGELOG.md` by @devharshthakur

### Fixed
- Using latest pnpm setup action by @devharshthakur
- Setup the coverage command by @devharshthakur
- Use `zod` schema validation for query paramenter by @devharshthakur
- Update pnpm lockfile as well by @devharshthakur
- Add node engine settings and using experimental cli ode for `prettier` by @devharshthakur
- Update relevant scripts by @devharshthakur
- Simplify docker build pipeline by @devharshthakur
- Exclude `build` folder by @devharshthakur
- Changed alias from `$middleware` to `$middlewares` by @devharshthakur

### Removed
- Remove incorrect file-based ruleset attempt by @devharshthakur

## [1.2.0] - 2026-06-07

### Added
- Add jsdoc comment by @devharshthakur

### Changed
- `v1.2.0` by @devharshthakur
- Docker setup by @devharshthakur
- Rename folder `middleware` to `middlewares` by @devharshthakur
- Update `CHANGELOG.md` by @devharshthakur

## [1.1.0] - 2026-06-07

### Added
- Add path aliases and tsc-alias for build-time resolution by @devharshthakur

### Changed
- `v1.0.0` by @devharshthakur
- Format by @devharshthakur
- Plain routers in route files, mount centralized in routes.ts by @devharshthakur
- Centralize shared router in src/routes.ts by @devharshthakur
- Rewrite README and add ARCHITECTURE.md by @devharshthakur
- Restructure under lib/ and add greet example route by @devharshthakur
- `CHANGELOG.md` by @devharshthakur

## [1.0.0] - 2026-06-07

### Added
- Add env validation using dotenv + zod by @devharshthakur

### Changed
- Git-cliff config by @devharshthakur
- Versioning the project by @devharshthakur
- Rewrite README with full project documentation by @devharshthakur
- Project setup by @devharshthakur
- Initial commit by @devharshthakur

### Removed
- Remove redundant tabWidth from prettier config by @devharshthakur

### New Contributors
* @devharshthakur made their first contribution

[1.4.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.3.2...v1.4.0
[1.3.2]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/devharshthakur/typescript-express-starter/compare/v1.0.0...v1.1.0

<!-- generated by git-cliff -->
