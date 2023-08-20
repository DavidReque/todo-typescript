import {useState} from 'react'
import { Todos } from './components/Todos'
import { FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const mockTodos = [
	{
		id: '1',
		title: 'todo 1',
		completed: true
	},
	{
		id: '2',
		title: 'todo 2',
		completed: false
	},
	{
		id: "3",
		title: 'todo 3',
		completed: false
	},
]

const App = (): JSX.Element => {

	const [todos, setTodos] = useState(mockTodos)
	const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

	const handleRemove = ({id}: TodoId): void => {
		const newTodos = todos.filter(todo => todo.id !== id)
		setTodos(newTodos)
	}

	const handleFilterChange = (filter: FilterValue): void => {
		setFilterSelected(filter)
	}

	const handleCompleted = (
		{id, completed}: Pick<TodoType, 'id' | 'completed'>
		): void => {
			const newTodos = todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed
					}
				}

				return todo
			})
			setTodos(newTodos)
	}

	const activeCount = todos.filter(todo => !todo.completed).length

	const completedCount = todos.length - activeCount

	const filteredTodo = todos.filter((todo) => {
		if (filterSelected === TODO_FILTERS.ACTIVE) {
			return !todo.completed
		} else if (filterSelected === TODO_FILTERS.COMPLETED) {
			return todo.completed
		} else {
			return todo
		}
	})

	return (
		<div className='todoapp'>
			<Todos todos={filteredTodo}
			onToggleCompleted={handleCompleted}
			handleRemove={handleRemove}/>
			<Footer 
			activeCount={activeCount}
			completedCount={completedCount}
			filterSelected={filterSelected}
			handleRemove={() => {}}
			handleFilterChange={handleFilterChange}/>
		</div>
	);
}

export default App;
