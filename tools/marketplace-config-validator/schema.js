const yup = require('yup')
const url = require('../utils/validators/url.js')
const categories = require('../../configs/marketplace-categories/default.json')

const marketplaceAppSchema = yup
    .object({
        id: yup.string().required(),
        external: yup.boolean(),
        title: yup.string().required(),
        logo: yup.string().test(url).required(),
        logoDarkMode: yup.string().test(url),
        shortDescription: yup.string().required(),
        categories: yup
            .array()
            .of(yup
                .string()
                .oneOf(categories)
                .required()
            )
            .required(),
        url: yup.string().test(url).required(),
        author: yup.string().required(),
        description: yup.string().required(),
        site: yup.string().test(url),
        twitter: yup.string().test(url),
        telegram: yup.string().test(url),
        github: yup.string().test(url),
        internalWallet: yup.boolean(),
        priority: yup.number(),
    });

const schema = yup
    .array()
    .json()
    .of(marketplaceAppSchema)

module.exports = schema;
