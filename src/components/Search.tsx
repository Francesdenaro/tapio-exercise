import { useStateMachine } from "little-state-machine"
import { useState } from "react"
import { setIsLoading, setPokemon } from "../lib/state"

export default function Search() {
	const [query, setQuery] = useState<string>("")
	const [error, setError] = useState<Error | null>(null)
	const { actions } = useStateMachine({ setIsLoading, setPokemon })

	async function fetchPokemon(query: string) {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
			const data = await res.json()
			actions.setPokemon(data)
			actions.setIsLoading(false)
		} catch (error) {
			setError(error as Error)
			actions.setIsLoading(false)
		}
	}

	return (
		<form className='flex flex-col gap-2 sm:w-96 sm:items-end'>
			<input
				type='text'
				placeholder='Insert the name of a Pokémon'
				value={query}
				onChange={e => {
					setQuery(e.target.value)
					setError(null)
				}}
				className='w-full grow rounded-md border-2 border-gray-300 p-2'
			/>
			<button
				onClick={e => {
					e.preventDefault()
					fetchPokemon(query)
					actions.setIsLoading(true)
				}}
				type='submit'
				className='rounded-md bg-sky-500 py-2 px-4 text-white'
			>
				Search
			</button>
			{error instanceof Error && (
				<div>
					<span className='text-red-500'>{error.message}</span>
					<button
						onClick={() => {
							setError(null)
							setQuery("")
							actions.setPokemon(null)
						}}
						className='rounded-md bg-orange-500 py-2 px-4 text-white'
					>
						Try again
					</button>
				</div>
			)}
		</form>
	)
}
