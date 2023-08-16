import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
    handleRemove: ({id}: TodoId) => void
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void

} 

export const Todo: React.FC<Props> = ({id, title, completed, handleRemove, onToggleCompleted}) => {
    return (
        <div className="view">
            <input type="checkbox" 
            className="toggle" 
            checked={completed} 
            onChange={(event) => {
                onToggleCompleted({id, completed: event.target.checked})
            }}/>
            <label >{title}</label>
            <button className="destroy"
            onClick={() => {
                handleRemove({id})
            }}/>
        </div>
    )
}