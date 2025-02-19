import './Task.css'
import { Component } from 'react';

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
        let { id, description, created, onDeleted, onToggleDone, done, onToggleEdit, editing } = this.props;
        let listView = ''
        if (done) {
            listView = 'completed'
        }

        if (editing) {
            listView = 'editing'
        }

        return (
            <li className={listView} key={id}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onToggleDone}></input>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button type='button' className="icon icon-edit" onClick={onToggleEdit} ></button>
                    <button type='button' className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                {
                    listView === 'editing' && (
                        <input
                            type="text"
                            className="edit"
                            defaultValue={description}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                        ></input>
                    )
                }
            </li >
        )

    }

}
