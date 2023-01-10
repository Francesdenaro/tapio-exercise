export interface Pokemon {
	name: string
	sprites: {
		other: {
			"official-artwork": { front_default: string }
		}
	}
	abilities: {
		ability: {
			name: string
		}
	}[]
	stats: {
		base_stat: number
		stat: {
			name: string
		}
	}[]
	types: {
		type: {
			name: string
		}
	}[]
}
