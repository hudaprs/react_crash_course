import React, { Component } from 'react'
import Todo from './components/Todo'
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn ReactJS',
        completed: false
      },
      {
        id: 2,
        title: 'Learn How To Code',
        completed: false
      },
      {
        id: 3,
        title: 'Prepare for fasting',
        completed: false
      }
    ]
  };

  // Make todo completed
  makeCompleted = (id) => {
    return this.setState({
      todos: this.state.todos.filter(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} makeCompleted={this.makeCompleted} deleteTodo={this.deleteTodo}/>
      </div>
    )
  };
}

export default App;