const readFiles = require('./readFiles.js')

function validateFilesWithYup(dirname, schema) {
	readFiles(
		dirname,
		async function (filename, content) {
			console.log(`⏳ Checking ${filename}...`)

			try {
				await schema.validate(content, {
					stripUnknown: false,
					abortEarly: false,
				})
				console.log('👍 All good!')
			} catch (_error) {
				if (
					typeof _error === 'object' &&
					_error !== null &&
					'errors' in _error
				) {
					console.log('🚨 ENVs validation failed with the following errors:')
					_error.errors.forEach((error) => {
						console.log('    ', error)
					})
					throw new Error(`👎 File "${filename}" is invalid!`)
				}

				throw _error
			}
		},
		function (err) {
			throw new Error(err)
		}
	)
}

module.exports = validateFilesWithYup
