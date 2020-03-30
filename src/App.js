import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Todo from './components/Todos/Todo'
import CreateTodo from './components/Todos/CreateTodo';
import About from './components/Pages/About';
import axios from 'axios';
import './App.css'

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount = async () => {
    try {
      const getTodos = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      const { data: todos } = getTodos
      this.setState({
        todos
      })
    } catch(err) {
      console.log(err)
    }
  }

  // Create Todo
  createTodo = async (title) => {
    try {
      if(title === '') {
        alert('Title cannot be blank')
        return false
      } 
      const newTodo = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      
      const { data: todo } = newTodo

      this.setState({
        todos: [...this.state.todos, todo]
      })
    } catch(err) {
      console.log(err)
    } 
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
  deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <CreateTodo 
                  createTodo={this.createTodo}
                />
                <Todo 
                  todos={this.state.todos} 
                  makeCompleted={this.makeCompleted} 
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  };
}

export default App;