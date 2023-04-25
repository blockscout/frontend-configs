export type NetworkGroup = 'Mainnets' | 'Testnets' | 'Other'

export interface FeaturedNetwork {
	title: string
	url: string
	group: NetworkGroup
	icon?: string
	isActive?: boolean
	invertIconInDarkMode?: boolean
}
