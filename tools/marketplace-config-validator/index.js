const { appItemOverviewSchema } = require('./schema.js')
const validateFilesWithSchema = require('../utils/validateFilesWithSchema.js')

console.log()
validateFilesWithSchema(
	__dirname + '/../../configs/marketplace',
	appItemOverviewSchema.array()
)
