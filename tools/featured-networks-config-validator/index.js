const { featuredNetworkSchema } = require('./schema.js')
const validateFilesWithSchema = require('../utils/validateFilesWithSchema.js')

console.log()
validateFilesWithSchema(
	__dirname + '/../../configs/featured-networks',
	featuredNetworkSchema.array()
)
