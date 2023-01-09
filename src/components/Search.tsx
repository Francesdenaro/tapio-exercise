import { useEffect, useState } from "react"
import { Pokemon } from "../Types"

export default function Search({ fetch }: { fetch: () => void }) {
	const [query, setQuery] = useState<string>("")
	const [error, setError] = useState<Error>()
	const [isLoaded, setIsLoaded] = useState(false)
	useEffect(() => {
		if (query === "") {
			setIsLoaded(true)
			return
		}
	}, [query])

	return (
		<div className='flex flex-col items-center justify-center'>
			<input
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
				className='rounded-md border-2 border-gray-300 p-2'
			/>
			<button
				onClick={fetch}
				className='mt-2 rounded-md bg-blue-500 p-2 text-white'
			>
				Search
			</button>
			{error ? <p>{error.message}</p> : null}
		</div>
	)
}
