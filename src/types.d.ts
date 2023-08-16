export interface Todo {
    id: string
	title: string
	completed: boolean
}

export type TodoId = PickTodo<Todo, 'id'>
export type TodoTitle = PickTodo<Todo, 'title'>
export type TodoCompleted = PickTodo<Todo, 'completed'>

export type ListOfTodos = Todo[]
