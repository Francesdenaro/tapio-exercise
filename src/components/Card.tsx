import { Pokemon } from "../Types"
import ClipLoader from "react-spinners/ClipLoader"
import { useStateMachine } from "little-state-machine"

export default function Card() {
	const { state } = useStateMachine()
	const pokemon = state.pokemon as Pokemon
	if (state.isLoading) {
		return (
			<div className='flex flex-col items-center justify-center rounded-xl bg-blue-50 py-12 '>
				<ClipLoader color='#3B82F6' />
			</div>
		)
	}

	return pokemon ? (
		<div className='flex flex-col items-center justify-center rounded-xl bg-gray-50 shadow-lg '>
			<img
				className='aspect-square w-full bg-white '
				src={
					pokemon.sprites &&
					pokemon.sprites.other["official-artwork"].front_default
				}
				alt='Pokémon'
			/>
			<div className='flex flex-col gap-1 px-2 py-4'>
				<h3 className='text-3xl font-bold capitalize'>{pokemon?.name}</h3>

				<div className='flex items-stretch gap-2'>
					<h4 className='font-bold'>Abilities:</h4>
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

				<div className='justify-left flex items-stretch gap-2'>
					<h4 className='font-bold'>Types:</h4>
					<div className='flex items-center justify-center gap-3 divide-x divide-solid divide-slate-500 '>
						{pokemon?.types.map(type => (
							<span
								className='p-0 text-center capitalize last:px-2'
								key={type.type.name}
							>
								{type.type.name}
							</span>
						))}
					</div>
				</div>

				<div>
					{pokemon.stats.map(stat => (
						<dl className='grid grid-cols-2 '>
							<dt className='font-semibold capitalize'>{stat.stat.name}:</dt>
							<dd className='p-0 text-right capitalize' key={stat.stat.name}>
								{stat.base_stat}
							</dd>
						</dl>
					))}
				</div>
			</div>
		</div>
	) : (
		<div className='flex flex-col items-center justify-center rounded-xl bg-blue-50 py-12 '>
			<h2 className='px-5 text-lg text-slate-600'>
				No Pokémon yet, please submit a Pokémon name!
			</h2>
		</div>
	)
}
