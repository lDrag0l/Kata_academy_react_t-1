import './TaskFilter.css'

function TasksFilter() {
    return (
        <div className='filters'>
            <li>
                <button type='button' className="selected">All</button>
            </li>
            <li>
                <button type='button'>Active</button>
            </li>
            <li>
                <button type='button'>Completed</button>
            </li>
        </div>
    )
}

export default TasksFilter
