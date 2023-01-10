import { Pokemon } from "../Types"

export function setPokemon(state: any, payload: Pokemon | null) {
	return {
		...state,
		pokemon: payload,
	}
}

export function setIsLoading(state: any, payload: boolean) {
	return {
		...state,
		isLoading: payload,
	}
}
