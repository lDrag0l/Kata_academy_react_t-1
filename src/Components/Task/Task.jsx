import { formatDistanceToNowStrict } from 'date-fns';
import './Task.css'
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {

    state = {
        label: ''
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.onEditTask(this.props.id, this.state.label)
        }
    };

    handleChange = (event) => {
        this.setState({ label: event.target.value });
    };

    render() {
        let { description, created, onDeleted, onToggleDone, done, onToggleEdit, editing } = this.props;

        let listView = ''

        if (done) {
            listView = 'completed'
        }

        if (editing) {
            listView = 'editing'
        }

        return (
            <li className={listView}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onToggleDone}></input>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{formatDistanceToNowStrict(created, { addSuffix: true })}</span>
                    </label>
                    <button type='button' className="icon icon-edit" onClick={onToggleEdit}></button>
                    <button type='button' className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                {
                    listView === 'editing' && (
                        <input
                            type="text"
                            className="edit"
                            defaultValue={description}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyPress}
                        ></input>
                    )
                }
            </li >
        )

    }

}

Task.propTypes = {
    description: PropTypes.string,
    created: PropTypes.instanceOf(Date),
    editing: PropTypes.bool,
    done: PropTypes.bool,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func
}

Task.defaultProps = {
    description: 'item description',
    created: 'Item create time',
    editing: false,
    done: false,
    onDeleted: () => { },
    onToggleDone: () => { },
    onToggleEdit: () => { }
}
