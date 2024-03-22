const yup = require('yup')

const issueSeverityDistributionSchema = yup.object({
	critical: yup.number().required(),
	gas: yup.number().required(),
	high: yup.number().required(),
	informational: yup.number().required(),
	low: yup.number().required(),
	medium: yup.number().required(),
})

const solidityscanReportSchema = yup.object({
	contractname: yup.string().required(),
	scan_status: yup.string().required(),
	scan_summary: yup
		.object({
			issue_severity_distribution: issueSeverityDistributionSchema.required(),
			lines_analyzed_count: yup.number().required(),
			scan_time_taken: yup.number().required(),
			score: yup.string().required(),
			score_v2: yup.string().required(),
			threat_score: yup.string().required(),
		})
		.required(),
	scanner_reference_url: yup.string().required(),
})

const contractDataSchema = yup.object({
	address: yup.string().required(),
	isVerified: yup.boolean().required(),
	solidityScanReport: solidityscanReportSchema.nullable().notRequired(),
})

const chainsDataSchema = yup.lazy((objValue) => {
	let schema = yup.object()
	Object.keys(objValue).forEach((key) => {
		schema = schema.shape({
			[key]: yup.object({
				overallInfo: yup
					.object({
						verifiedNumber: yup.number().required(),
						totalContractsNumber: yup.number().required(),
						solidityScanContractsNumber: yup.number().required(),
						securityScore: yup.number().required(),
						issueSeverityDistribution:
							issueSeverityDistributionSchema.required(),
					})
					.required(),
				contractsData: yup.array().of(contractDataSchema).required(),
			}),
		})
	})
	return schema
})

const securityReportSchema = yup.object({
	appName: yup.string().required(),
	chainsData: chainsDataSchema,
})

const schema = yup.array().json().of(securityReportSchema)

module.exports = schema
