const baseGoerliConfig = require('../../configs/marketplace/base-goerli.json')
const { appItemOverviewSchema } = require('./schema.js')

console.log('Checking base-goerli.json...')
appItemOverviewSchema.array().parse(baseGoerliConfig)
console.log('All good!')
