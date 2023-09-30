const yup = require('yup')
const url = require('../utils/validators/url.js')

const featuredNetworkSchema = yup
    .object()
    .shape({
        title: yup.string().required(),
        url: yup.string().test(url).required(),
        group: yup.string().oneOf(['Mainnets', 'Testnets', 'Other']).required(),
        icon: yup.string().test(url),
        isActive: yup.boolean(),
        invertIconInDarkMode: yup.boolean(),
    })

const schema = yup
    .array()
    .json()
    .of(featuredNetworkSchema)

module.exports = schema;