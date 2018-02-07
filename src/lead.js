import React from 'react';
import Menu from './menu';
import About from './about';
import Projects from './projects';
import './index.css';
import './images/down.png';


class Lead extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    document.querySelector('.about').scrollIntoView({
      behavior: 'smooth'
    });
  };

  render() {
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
        <div className="project-container">
          <div className="project-header">Projects</div>
          <Projects/>
        </div>
      </div>
    );
  } 
}

export default Lead;
