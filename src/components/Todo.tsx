import { TodoId, type Todo as TodoTypes } from "../types"

interface Props extends TodoTypes {
    handleRemove: (id: TodoId) => void
} 

export const Todo: React.FC<Props> = ({id, title, completed, handleRemove}) => {
    return (
        <div className="view">
            <input type="checkbox" 
            className="toggle" 
            checked={completed} 
            onChange={() => {}}/>
            <label >{title}</label>
            <button className="destroy"
            onClick={() => {
                handleRemove(id)
            }}/>
        </div>
    )
}