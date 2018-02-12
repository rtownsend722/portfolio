import React from 'react';
import Menu from './menu';
import About from './about';
// import Projects from './projects';
import ProjectBasic from './projectsBasic.js'
import Tech from './tech';
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
        </div>
        <div>
          <About/>
          <Tech/>
          <ProjectBasic/>
        </div>
      </div>
    );
  } 
}

export default Lead;
