import "little-state-machine"
import { Pokemon } from "./Types"

declare module "little-state-machine" {
	interface GlobalState {
		pokemon: Pokemon | null
		isLoading: boolean
	}
}
