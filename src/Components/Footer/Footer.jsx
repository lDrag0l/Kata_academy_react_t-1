import './Footer.css'
import TaskFilter from '../TasksFilter'

function Footer(props) {
    return (
        <footer className='footer'>
            <span className="todo-count">{props.todoCount} items left</span>
            <TaskFilter
                onChangeFilter={props.onChangeFilter}
                selectedFilter={props.selectedFilter}
            />
            <button type='button' className="clear-completed" onClick={props.onClearDone}>Clear completed</button>
        </footer>

    )
}

export default Footer
