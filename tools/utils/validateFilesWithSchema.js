const readFiles = require('./readFiles.js')
const { fromZodError } = require('zod-validation-error')

function validateFilesWithSchema(dirname, zodType) {
	readFiles(
		dirname,
		function (filename, content) {
			console.log(`⏳ Checking ${filename}...`)
			try {
				zodType.parse(JSON.parse(content))
				console.log('👍 All good!\n')
			} catch (error) {
				const validationError = fromZodError(error, {
					prefix: '',
					prefixSeparator: '\n  ',
					unionSeparator: ',\n  ',
				})
				console.log(validationError)
				console.log('🚨 File is invalid\n')
				process.exit(1)
			}
		},
		function (err) {
			throw new Error(err)
		}
	)
}

module.exports = validateFilesWithSchema
