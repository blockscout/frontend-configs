export type MarketplaceCategoriesIds =
	| 'infra & dev tooling'
	| 'defi'
	| 'data'
	| 'bridge'
	| 'nft'
	| 'payments'
	| 'faucet'
	| 'dao'
	| 'games'
	| 'wallet'

export type MarketplaceCategory = { id: MarketplaceCategoriesIds; name: string }

export type AppItemPreview = {
	id: string
	external?: boolean
	title: string
	logo: string
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
