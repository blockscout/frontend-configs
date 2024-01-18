const schema = require('./schema.js')
const validateFilesWithYup = require('../utils/validateFilesWithYup.js')

console.log()
validateFilesWithYup(__dirname + '/../../configs/footer-links', schema)
