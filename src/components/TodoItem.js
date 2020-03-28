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

export default TodoItem;