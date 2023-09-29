const yup = require('yup')
const url = require('../utils/validators/url.js')

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
                .oneOf([
                    'Infra & Dev tooling',
                    'DeFi',
                    'Data',
                    'Bridge',
                    'NFT',
                    'Payments',
                    'Faucet',
                    'DAO',
                    'Games',
                    'Wallet',
                ])
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
    });

const schema = yup
    .array()
    .json()
    .of(marketplaceAppSchema)

module.exports = schema;