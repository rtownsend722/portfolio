import React from 'react';
import './index.css';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  handleAboutClick() {
    document.querySelector('.about-title').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.handleAboutClick.bind(this)} className="about-title">About Me</div>
        <div className="about">
          <div className="about-photo">
            <img src={require("./images/me.jpg")} with="300px" height="300px"d></img>
          </div>
          <div className="about-main">
            <div className="about-content">
              <p>I’m a full stack software engineer with a passion for developing intuitive, resposive, and flexible user experiences.</p>
              <p>I'm highly skilled with various frontend JavaScript libraries and frameworks, including React and AngularJS, as well as server-side technologies including NodeJS, Express, and both SQL and noSQL querying languages.</p>
              <p>I really enjoy levereging my knowledge of the full stack to create pleasant user experiences backed by performant server-side architecture.</p>
              <p>When I'm not coding, you can find me enjoying the great outdoors, listening to a podcast, reading, or searching for my new favorite coffee shop. Drop me a line if you'd like to talk!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
