import React, { Component } from 'react';
import PropType from 'prop-types';
class TodoItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.todo.title}</h3>
      </div>
    );
  };
}

// PropTypes
TodoItem.propTypes = {
  todo: PropType.object.isRequired
};

export default TodoItem;