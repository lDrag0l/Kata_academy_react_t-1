import { Component } from 'react'
import './TaskList.css'
import Task from '../Task'
import PropTypes from 'prop-types';
export default class TaskList extends Component {

    render() {
        let { onDeleted, onToggleDone, onToggleEdit, onEditTask } = this.props
        const elements = this.props.toDos.map((item) => {
            const { id, ...itemProps } = item
            return (
                <Task
                    key={id}
                    id={id}
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleEdit={() => onToggleEdit(id)}
                    onEditTask={onEditTask}
                />
            );
        });

        return (
            <section className='main' >
                <ul className='todo-list'>
                    {elements}
                </ul>
            </section>
        )
    }
}
TaskList.propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    onEditTask: PropTypes.func
}

TaskList.defaultProps = {
    onDeleted: () => { },
    onToggleDone: () => { },
    onToggleEdit: () => { },
    onEditTask: () => { }
}
