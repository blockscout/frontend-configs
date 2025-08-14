const fs = require('fs')

const jsonFile = process.argv[2]

if (!jsonFile) {
	console.error('Please provide a JSON file as an argument')
	process.exit(1)
}

const jsonData = fs.readFileSync(jsonFile, 'utf8')
const jsonObject = JSON.parse(jsonData)

const singleLineString = JSON.stringify(jsonObject)
	.replace(/"/g, "'")
	.replace(/,\s*/g, ',')

console.log(singleLineString)
