import './App.css'

import Header from '../Header'
import Footer from '../Footer'
import TaskList from '../TaskList'

import { Component } from 'react'

export default class App extends Component {

  maxID = 100;

  createTodoItem = (description) => {
    return {
      description,
      created: new Date(),
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
    label: '',
    selectedFilter: 'All'
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

  onClearDone = () => {
    this.setState(({ Data }) => {
      const newData = []

      Data.forEach((item) => {
        if (!item.done) newData.push(item)
      })

      return {
        Data: newData
      }
    })
  }

  onEditTask = (id, text) => {
    this.setState(({ Data }) => {
      const inx = Data.findIndex((el) => el.id === id)

      const oldItem = Data[inx]
      const newItem = { ...oldItem, description: text, editing: false }

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

  onChangeFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { Data, label, selectedFilter } = this.state

    const doneCount = Data.filter((el) => el.done).length
    const todoCount = Data.length - doneCount

    const filteredTasks = Data.filter((task) => {
      if (selectedFilter === 'Active') return !task.done;
      if (selectedFilter === 'Completed') return task.done;
      return true;
    });

    return (
      <form className='todoapp' onSubmit={this.onSubmit}>
        <Header onChangeInput={this.onChangeInput} label={label} />
        <TaskList
          toDos={filteredTasks}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleEdit={this.onToggleEdit}
          onEditTask={this.onEditTask}
        />
        <Footer
          todoCount={todoCount}
          onClearDone={this.onClearDone}
          onChangeFilter={this.onChangeFilter}
          selectedFilter={selectedFilter}
        />
      </form>
    )
  }
}
