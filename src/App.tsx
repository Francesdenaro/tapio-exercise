import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Search from "./components/Search"
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query"
import { Pokemon } from "./Types"
import {
	useStateMachine,
	StateMachineProvider,
	createStore,
} from "little-state-machine"

const queryClient = new QueryClient()

function App() {
	return (
		<StateMachineProvider>
			<QueryClientProvider client={queryClient}>
				<div className='flex h-screen flex-col items-center gap-10'>
					<Header />
					<div className='flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:items-start'>
						<Search />
						<Card />
					</div>
				</div>
			</QueryClientProvider>
		</StateMachineProvider>
	)
}
export default App
