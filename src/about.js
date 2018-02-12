import React from 'react';
import './index.css';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="about">
          <div className="about-photo">
            <img src={require("./images/me.jpg")} with="300px" height="300px"d></img>
          </div>
          <div className="about-main">
            <div className="about-content">
              <p>I’m a full stack software engineer with a passion for developing intuitive, resposive, and flexible user experiences.</p>
              <p>I'm highly skilled with various front-end JavaScript libraries and frameworks, including React and AngularJS, as well as server-side technologies including NodeJS, Express, and both SQL and noSQL querying languages.</p>
              <p>I really enjoy levering my knowledge of the full stack to create pleasant user experiences backed by performant server-side architecture.</p>
              <p>When I'm not coding, you can find me enjoying the great outdoors, listening to a podcast, reading, or searching for my new favorite coffee shop. Drop me a line if you'd like to talk!</p>
            </div>
            { /*<div className="icons">
              <span><a href="https://www.linkedin.com/in/rtownsend722/"><img src={require("./images/linkedin.svg")}></img></a></span>
              <span><a href="https://github.com/rtownsend722"><img src={require("./images/github.svg")}></img></a></span>
              <span><a href="mailto:rebecca.townsend722@gmail.com"><img src={require("./images/send.svg")}></img></a></span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
