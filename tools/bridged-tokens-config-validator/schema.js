const yup = require('yup')
const url = require('../utils/validators/url.js')

const bridgedChainSchema = yup.object({
	id: yup.string().required(),
	title: yup.string().required(),
	short_title: yup.string().required(),
	base_url: yup.string().test(url).required(),
})

const bridgeSchema = yup.object({
	type: yup.string().required(),
	title: yup.string().required(),
	short_title: yup.string().required(),
})

const schema = yup
	.object()
	.json()
	.shape({
		chains: yup.array().of(bridgedChainSchema).required(),
		bridges: yup.array().of(bridgeSchema).required(),
	})

module.exports = schema
