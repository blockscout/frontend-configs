const yup = require('yup')
const url = require('../utils/validators/url.js')

const footerLinkSchema = yup.object({
	text: yup.string().required(),
	url: yup.string().test(url).required(),
})

const footerLinkGroupSchema = yup.object({
	title: yup.string().required(),
	links: yup.array().of(footerLinkSchema).required(),
})

const schema = yup.array().json().of(footerLinkGroupSchema)

module.exports = schema
