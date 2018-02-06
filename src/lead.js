import React from 'react';
import Menu from './menu';
import About from './about';
import './index.css';
import './images/down.png';


class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'main'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.querySelector('.icons').scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    if (this.state.display === 'main') {
      return (
        <div>
          <div className='lead-body'>
            <Menu className='menu'/>
            <div className='lead-header'>
              <div className='name'>Hi, I'm Rebecca Townsend.</div>
            </div>
            <div className='lead-image bounce'>
              <img src={require("./images/down.png")} onClick={this.handleClick}></img>
            </div>
          </div>
          <div>
            <About/>
          </div>
        </div>
      );
    } else {
      return (
        <About/>
      );
    }
  }
}

export default Lead;
