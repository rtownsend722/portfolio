import React from 'react';
import './index.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  handleProjectClick() {
    document.querySelector('.projects-title').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  };

  handleAboutClick() {
    document.querySelector('.about-title').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  };

  handleContactClick() {
    document.querySelector('.footer').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div className='menu'>
        <button onClick={this.handleProjectClick.bind(this)}className='menu-item go-projects'>Projects</button>
        <button onClick={this.handleAboutClick.bind(this)} className='menu-item go-about'>About Me</button>
        <button onClick={this.handleContactClick.bind(this)} className='menu-item go-contact'>Contact</button>
      </div>
    );
  }
}

export default Menu;
