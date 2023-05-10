export type MarketplaceCategoriesIds =
	| 'Infra & Dev tooling'
	| 'DeFi'
	| 'Data'
	| 'Bridge'
	| 'NFT'
	| 'Payments'
	| 'Faucet'
	| 'DAO'
	| 'Games'
	| 'Wallet'

export type MarketplaceCategory = { id: MarketplaceCategoriesIds; name: string }

export type AppItemPreview = {
	id: string
	external?: boolean
	title: string
	logo: string
	logoDarkMode?: string
	shortDescription: string
	categories: Array<MarketplaceCategoriesIds>
	url: string
}

export type AppItemOverview = AppItemPreview & {
	author: string
	description: string
	site?: string
	twitter?: string
	telegram?: string
	github?: string
}
