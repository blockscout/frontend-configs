# Blockscout frontend configs

Config files and assets (network logos and icons, featured networks, marketplace, footer links and more) served
to [Blockscout frontend](https://github.com/blockscout/frontend) instances. Everything lives in `configs/`.

## Setup

Requires Node.js 24.21.0 or newer (see `.nvmrc`) and pnpm (the version is pinned in `package.json`).

```sh
pnpm install
```

## Commands

- `pnpm lint:eslint` — lint the JSON configs and the scripts.
- `pnpm format-svg` — optimize every SVG in `configs/`.
- `pnpm generate:footer-links` — generate the footer links configs.
- `node ./tools/json-converter/index.js <path-to-file>` — print a JSON file as a single string, for use as an
  environment variable value.

The pre-commit hook lints and formats the staged files, and optimizes the staged SVGs.
