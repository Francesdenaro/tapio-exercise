import { Pokemon } from "../Types"
import ClipLoader from "react-spinners/ClipLoader"
import { useStateMachine } from "little-state-machine"

export default function Card() {
	const { state } = useStateMachine()
	const pokemon = state.pokemon as Pokemon
	if (state.isLoading) {
		return (
			<div className='flex flex-col items-center justify-center rounded-xl bg-blue-50 py-12 sm:w-80'>
				<ClipLoader color='#3B82F6' />
			</div>
		)
	}

	return pokemon ? (
		<div className='flex flex-col items-center justify-center rounded-xl bg-gray-50 shadow-lg sm:w-80'>
			<img
				className='aspect-square w-full bg-white '
				src={
					pokemon.sprites &&
					pokemon.sprites.other["official-artwork"].front_default
				}
				alt='Pokémon'
			/>
			<div className='flex flex-col gap-1 px-2 py-4'>
				<h3 className='text-xl font-bold capitalize'>{pokemon?.name}</h3>
				<div className='flex items-stretch justify-center gap-2'>
					<h4>Abilities:</h4>
					<div className='flex items-center justify-center gap-3 divide-x divide-solid divide-slate-500 '>
						{pokemon?.abilities.map(ability => (
							<span
								className='p-0 text-center capitalize last:px-2'
								key={ability.ability.name}
							>
								{ability.ability.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className='flex flex-col items-center justify-center rounded-xl bg-blue-50 py-12 sm:w-80'>
			<h2 className='px-5 text-lg text-slate-600'>
				No Pokémon yet, please submit a Pokémon name!
			</h2>
		</div>
	)
}
