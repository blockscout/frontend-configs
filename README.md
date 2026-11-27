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

## Schema validation

CI validates the JSON configs against the schemas of the frontend application, taken from the `main` branch of
[blockscout/frontend](https://github.com/blockscout/frontend); this repository keeps no copy of them. Which
directory is validated as which variable is listed in `tools/config-validator/index.js`. A directory that is not
listed there is not validated.

To run the validation locally, build the validator in a checkout of the frontend repository and pass its path:

```sh
# in the frontend checkout
pnpm install
pnpm --dir deploy/tools/envs-validator run build:json-configs

# in this repository
node ./tools/config-validator/index.js <frontend-checkout>/deploy/tools/envs-validator/dist/json-configs-cli.js
```

To validate against another branch of the frontend, run the Checks workflow by hand and set `frontend_ref`.
