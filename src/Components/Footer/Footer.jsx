import './Footer.css'
import TaskFilter from '../TasksFilter'
import PropTypes from 'prop-types';

function Footer({ todoCount = '0', onChangeFilter = () => { }, selectedFilter = 'All', onClearDone = () => { } }) {
    return (
        <footer className='footer'>
            <span className="todo-count">{todoCount} items left</span>
            <TaskFilter
                onChangeFilter={onChangeFilter}
                selectedFilter={selectedFilter}
            />
            <button type='button' className="clear-completed" onClick={onClearDone}>Clear completed</button>
        </footer>

    )
}

export default Footer

Footer.propTypes = {
    todoCount: PropTypes.number,
    selectedFilter: PropTypes.string,
    onClearDone: PropTypes.func,
    onChangeFilter: PropTypes.func
}