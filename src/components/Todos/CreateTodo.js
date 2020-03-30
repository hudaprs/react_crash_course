import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createTodo = (e) => {
    e.preventDefault()
    this.props.createTodo(this.state.title)
    this.setState({title: ''})
  }

  render() {
    return (
      <form onSubmit={this.createTodo} style={{display: 'flex'}}>
        <input 
          type="text"
          name="title"
          onChange={this.onChange}
          value={this.state.value}
          placeholder="What's you gonna do today"
          style={{flex: '10', padding: '5px'}}
        />
        <button 
          type="submit"
          className="btn"
          style={{flex: '1'}}
        >
          Create
        </button>
      </form>
    );
  }
}

export default CreateTodo;