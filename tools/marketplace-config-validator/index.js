const { appItemOverviewSchema } = require('./schema.js')

const fs = require('fs')
const path = require('path')

function readFiles(dirname, onFileContent, onError) {
	fs.readdir(dirname, function (err, filenames) {
		if (err) {
			onError(err)
			return
		}
		filenames.forEach(function (filename) {
			fs.readFile(
				path.resolve(dirname, filename),
				'utf-8',
				function (err, content) {
					if (err) {
						onError(err)
						return
					}
					onFileContent(filename, content)
				}
			)
		})
	})
}

console.log()
readFiles(
	__dirname + '/../../configs/marketplace',
	function (filename, content) {
		console.log(`⏳ Checking ${filename}...`)
		appItemOverviewSchema.array().parse(JSON.parse(content))
		console.log('👍 All good!')
		console.log()
	},
	function (err) {
		throw err
	}
)
