import './NewTaskForm.css'
import { Component } from 'react'

export default class NewTaskForm extends Component {

    render() {
        let { onChangeInput, label } = this.props;
        return (
            <input className="new-todo" placeholder="What needs to be done?" onChange={onChangeInput} value={label}></input>
        )
    }
}
