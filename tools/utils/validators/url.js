// Yup's URL validator is not perfect so we made our own
// https://github.com/jquense/yup/pull/1859
const urlTestConfig = {
	name: 'url',
	test: (value) => {
		if (!value) {
			return true
		}

		try {
			if (typeof value === 'string') {
				new URL(value)
				return true
			}
		} catch (error) {
			/* empty */
		}

		return false
	},
	message: '${path} is not a valid URL',
	exclusive: true,
}

module.exports = urlTestConfig
