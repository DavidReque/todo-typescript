import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completedCount: number
    handleRemove: () => void
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
    activeCount = 0, 
    completedCount = 0,
    filterSelected,
    handleFilterChange,
    handleRemove
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> Tareas pendientes
            </span>

            <Filters 
            filterSelected={filterSelected}
            onFilterChange={handleFilterChange} />

            {
                completedCount > 0 && (
                    <button className="clear-completed" 
                    onClick={handleRemove}>
                        Borrar completados
                    </button>
                )
            }
        </footer>
    )
}