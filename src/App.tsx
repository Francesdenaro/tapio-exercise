import Card from "./components/Card"
import Header from "./components/Header"
import Search from "./components/Search"
import { StateMachineProvider } from "little-state-machine"

function App() {
	return (
		<StateMachineProvider>
			<div className='flex h-screen flex-col items-center gap-10'>
				<Header />
				<h1 className='w-4/5 sm:w-96'>
					Search for a Pokémon by name or using the National Pokédex number.
				</h1>
				<div className='flex w-4/5 flex-col items-stretch justify-center gap-4 sm:w-96 sm:items-stretch'>
					<Search />
					<Card />
				</div>
			</div>
		</StateMachineProvider>
	)
}
export default App
