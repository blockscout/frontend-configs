import yup from 'yup'
import url from '../utils/validators/url.js'
import categories from '../../configs/marketplace-categories/default.json' with { type: 'json' }

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

export default schema;
