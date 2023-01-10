import { useStateMachine } from "little-state-machine"
import { useState } from "react"
import { setIsLoading, setPokemon } from "../lib/state"

export default function Search() {
	const [query, setQuery] = useState<string>("")
	const [error, setError] = useState<Error | null>(null)
	const { actions } = useStateMachine({ setIsLoading, setPokemon })

	async function fetchPokemon(query: string) {
		try {
			const res = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
			)
			const data = await res.json()
			actions.setPokemon(data)
			actions.setIsLoading(false)
		} catch (error) {
			setError(error as Error)
			actions.setIsLoading(false)
		}
	}

	return (
		<form className='flex flex-col gap-10 '>
			<div className='flex gap-2'>
				<input
					type='text'
					required
					placeholder='Insert the name of a Pokémon'
					value={query}
					onChange={e => {
						setQuery(e.target.value)
						setError(null)
					}}
					className={`w-full grow rounded-md border-2 ${
						error ? "border-red-500" : "border-gray-300"
					} p-2`}
				/>
				<button
					onClick={e => {
						if (!query) return
						e.preventDefault()
						fetchPokemon(query)
						actions.setIsLoading(true)
					}}
					type='submit'
					className='rounded-md bg-sky-500 py-2 px-4 text-white'
				>
					Search
				</button>
			</div>
			{error instanceof Error && (
				<div className='flex flex-col'>
					<div className='text-red-500'>{error.message}</div>
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
