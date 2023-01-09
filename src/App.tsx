import { useEffect, useState } from "react"
import Card from "./components/Card"
import Search from "./components/Search"
import { Pokemon } from "./Types"

function App() {
	const [pokemon, setPokemon] = useState<Pokemon>()
	const [query, setQuery] = useState<string>("")
	const [error, setError] = useState<Error>()
	const [isLoaded, setIsLoaded] = useState(false)
	useEffect(() => {
		if (query === "") {
			setIsLoaded(true)
			return
		}
	}, [query])

	const fetchPokemon = async () => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
			const data = await response.json()
			setPokemon(data)
			setIsLoaded(true)
			console.log(data)
		} catch (error: any) {
			setError(error)
			setIsLoaded(true)
		}
	}

	return isLoaded ? (
		<div className='flex h-screen flex-col items-center gap-4'>
			<div className='w-full bg-orange-600 py-2 text-center text-white'>
				<h1 className='text-2xl'>Pokémon finder</h1>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<Search fetch={fetchPokemon} />
				{error ? <p>{error.message}</p> : <Card pokemon={pokemon} />}
			</div>
		</div>
	) : (
		<div className='flex h-screen flex-col items-center justify-center'>
			<p>Loading...</p>
		</div>
	)
}
export default App
