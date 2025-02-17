import { Component } from 'react'
import './App.css'
import Header from '../Header'
import Footer from '../Footer'
import TaskList from '../TaskList'

export default class App extends Component {

  maxID = 100;

  createTodoItem = (description) => {
    return {
      description,
      created: '5 min ago',
      done: false,
      editing: false,
      id: this.maxID++
    }
  }

  state = {
    Data: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task'),
      this.createTodoItem('Active task')
    ],
    label: ''
  }

  onToggleDone = (id) => {
    this.setState(({ Data }) => {
      const inx = Data.findIndex((el) => el.id === id)

      const oldItem = Data[inx]
      const newItem = { ...oldItem, done: !oldItem.done }

      const newData = [
        ...Data.slice(0, inx),
        newItem,
        ...Data.slice(inx + 1)
      ];

      return {
        Data: newData
      }
    })
  }

  onToggleEdit = (id) => {
    this.setState(({ Data }) => {
      const inx = Data.findIndex((el) => el.id === id)

      const oldItem = Data[inx]
      const newItem = { ...oldItem, editing: !oldItem.editing }

      const newData = [
        ...Data.slice(0, inx),
        newItem,
        ...Data.slice(inx + 1)
      ];

      return {
        Data: newData
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ Data }) => {

      const inx = Data.findIndex((el) => el.id === id)

      const newData = Data.toSpliced(inx, 1)

      return {
        Data: newData
      }

    })
  }

  onChangeInput = (event) => {
    this.setState({
      label: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState(({ Data, label }) => {
      const newItem = this.createTodoItem(label)
      const newData = [...Data, newItem]

      return {
        Data: newData,
        label: ''
      }
    })
  }

  render() {
    const { Data, label } = this.state
    const doneCount = Data.filter((el) => el.done).length
    const todoCount = Data.length - doneCount

    return (
      <form className='todoapp' onSubmit={this.onSubmit}>
        <Header onChangeInput={this.onChangeInput} label={label} />
        <TaskList
          toDos={Data}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit} />
        <Footer todoCount={todoCount} />
      </form>
    )
  }
}
