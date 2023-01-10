import Card from "./components/Card"
import Header from "./components/Header"
import Search from "./components/Search"
import { StateMachineProvider } from "little-state-machine"

function App() {
	return (
		<StateMachineProvider>
			<div className='flex h-screen flex-col items-center gap-10'>
				<Header />
				<div className='flex w-4/5 flex-col items-stretch justify-center gap-4 px-4 sm:w-96 sm:flex-col-reverse sm:items-stretch'>
					<Search />
					<Card />
				</div>
			</div>
		</StateMachineProvider>
	)
}
export default App
