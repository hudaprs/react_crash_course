import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#000',
  padding: '10px',
  color: '#fff',
  textAlign: 'center'
};

export default Header;