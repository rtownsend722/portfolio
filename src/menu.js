import React from 'react';
import './index.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='menu'>
        <button className='menu-item'>Projects</button>
        <button className='menu-item'>About Me</button>
      </div>
    );
  }
}

export default Menu;
