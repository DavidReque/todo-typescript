import {type TodoId, type ListOfTodos, type Todo as TodoType} from '../types'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodos
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    handleRemove: ({id}: TodoId) => void
}

export const Todos: React.FC<Props> = ({todos, handleRemove, onToggleCompleted}) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        handleRemove={handleRemove}
                        onToggleCompleted={onToggleCompleted}/>
                    </li>
                ))
            }
        </ul>
    )
}