import { Component } from 'react';
import './TaskFilter.css';
import PropTypes from 'prop-types';

export default class TasksFilter extends Component {
    render() {
        const { onChangeFilter, selectedFilter } = this.props;
        return (
            <div className='filters'>
                <label className={selectedFilter === 'All' ? 'selected' : ''}>
                    <input
                        type="radio"
                        name="taskFilter"
                        value="All"
                        onChange={() => onChangeFilter('All')}
                    />
                    All
                </label>

                <label className={selectedFilter === 'Active' ? 'selected' : ''}>
                    <input
                        type="radio"
                        name="taskFilter"
                        value="Active"
                        onChange={() => onChangeFilter('Active')}
                    />
                    Active
                </label>

                <label className={selectedFilter === 'Completed' ? 'selected' : ''}>
                    <input
                        type="radio"
                        name="taskFilter"
                        value="Completed"
                        onChange={() => onChangeFilter('Completed')}
                    />
                    Completed
                </label>
            </div>
        );
    }
}

TasksFilter.propTypes = {
    onChangeFilter: PropTypes.func,
    selectedFilter: PropTypes.string
}


TasksFilter.defaultProps = {
    onChangeFilter: () => { },
    selectedFilter: 'All'
}
