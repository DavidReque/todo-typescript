import { type Todo as TodoTypes } from "../types"

type Props = TodoTypes

export const Todo: React.FC<Props> = ({id, title, completed}) => {
    return (
        <div className="view">
            <input type="checkbox" 
            className="toggle" 
            checked={completed} 
            onChange={() => {}}/>
            <label >{title}</label>
            <button className="destroy"
            onClick={() => {}}>Eliminar</button>
        </div>
    )
}