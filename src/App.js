import React, { Component } from 'react'
import Header from './components/layouts/Header';
import Todo from './components/Todos/Todo'
import CreateTodo from './components/Todos/CreateTodo';
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

  // Create Todo
  createTodo = (title) => {
    if(title === '') {
      alert('Title cannot be blank')
      return false
    }  
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  } 

  // Make todo completed
  makeCompleted = (id) => {
    this.setState({
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
        <div className="container">
          <Header />
          <CreateTodo 
            createTodo={this.createTodo}
          />
          <Todo 
            todos={this.state.todos} 
            makeCompleted={this.makeCompleted} 
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    )
  };
}

export default App;