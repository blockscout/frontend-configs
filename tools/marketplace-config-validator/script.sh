yarn ts-to-zod ./tools/marketplace-config-validator/types.ts ./tools/marketplace-config-validator/schema.ts
yarn tsc -p ./tools/marketplace-config-validator/tsconfig.json
node ./tools/marketplace-config-validator/index.js