yarn ts-to-zod ./tools/footer-links-config-validator/types.ts ./tools/footer-links-config-validator/schema.ts
yarn tsc -p ./tools/footer-links-config-validator/tsconfig.json
node ./tools/footer-links-config-validator/index.js