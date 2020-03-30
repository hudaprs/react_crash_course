import React, { Component } from 'react';
import PropType from 'prop-types';
class TodoItem extends Component {
  getStyle = () => {
    let { todo } = this.props; 
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      padding: '10px',
      backgroundColor: '#f4f4f4',
      borderBottom: '3px #ccc dotted'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <h3 style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.makeCompleted.bind(this, id)}/> {' '}
            {title}
            <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
          </p>
        </h3>
      </div>
    );
  };
}

// PropTypes
TodoItem.propTypes = {
  todo: PropType.object.isRequired
};

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;