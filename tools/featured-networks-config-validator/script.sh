yarn ts-to-zod ./tools/featured-networks-config-validator/types.ts ./tools/featured-networks-config-validator/schema.ts
yarn tsc -p ./tools/featured-networks-config-validator/tsconfig.json
node ./tools/featured-networks-config-validator/index.js