import { Pokemon } from "../Types"

export default function Card({ pokemon }: { pokemon?: Pokemon }) {
	return pokemon ? (
		<div className='flex flex-col items-center justify-center'>
			<img
				className='h-40 w-40 rounded-xl p-4 shadow-md'
				src={
					pokemon ? pokemon.sprites.other["official-artwork"].front_default : ""
				}
				alt='Pokémon'
			/>
			<span>{pokemon?.name}</span>
		</div>
	) : (
		<div className='flex flex-col items-center justify-center p-5'>
			<h2 className='text-xl text-slate-600'>
				No Pokémon yet, please submit a Pokémon name!
			</h2>
		</div>
	)
}
