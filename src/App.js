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

  render() {
    return (
      <div className="App">
        <Todo todos={this.state.todos} />
      </div>
    )
  };
}

export default App;