import React, {Component} from 'react';
import Menu from './menu';
import About from './about';
import ProjectBasic from './projectsBasic.js'
import Tech from './tech';
import './index.css';


export default class Lead extends Component {
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
        <div className="footer">
          <div className="contact-container">
            <div className='contact-me'>Contact Me</div>
            <img src={require("./images/chevright.svg")}></img>
          </div>
          <div className="icons">
            <div className="icon"><a href="https://www.linkedin.com/in/rtownsend722/"><img src={require("./images/linkedin.svg")}></img></a></div>
            <div className="icon"><a href="https://github.com/rtownsend722"><img src={require("./images/github.svg")}></img></a></div>
            <div className="icon"><a href="mailto:rebecca.townsend722@gmail.com"><img src={require("./images/send.svg")}></img></a></div>
          </div>
        </div>
      </div>
    );
  } 
}

