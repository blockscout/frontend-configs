const { footerLinksGroupSchema } = require('./schema.js')
const validateFilesWithSchema = require('../utils/validateFilesWithSchema.js')

console.log()
validateFilesWithSchema(
	__dirname + '/../../configs/footer-links',
	footerLinksGroupSchema.array()
)
