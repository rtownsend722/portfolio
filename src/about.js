import React from 'react';
import './index.css';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <div className="about-main">
          <div className="about-photo">
            <img src={require("./images/rebecca.jpg")} width="200px" height="200px"></img>
          </div>
          <div className="about-content">
            <p>Hi! I’m a full stack software engineer with a passion for developing intuitive, resposive, and flexible user experiences.</p>
            <p>I'm highly skilled with various front-end JavaScript libraries and frameworks, including React and AngularJS, as well as server-side technologies including NodeJS, Express, and both SQL and noSQL querying languages.</p>
            <p>I really enjoy levering my knowledge of the full stack to create pleasant user experiences backed by performant server-side architecture.</p>
            <p>When I'm not coding, you can find me enjoying the great outdoors, listening to a podcast, reading, or searching for my new favorite coffee shop. Drop me a line if you'd like to talk!</p>
          </div>
          <div className="icons">
            <span><a href="https://www.linkedin.com/in/rtownsend722/"><img src={require("./images/linkedin.svg")}></img></a></span>
            <span><a href="https://github.com/rtownsend722"><img src={require("./images/github.svg")}></img></a></span>
            <span><a href="mailto:rebecca.townsend722@gmail.com"><img src={require("./images/send.svg")}></img></a></span>
          </div>
        </div>
        <div className="about-tags">
          <img src={require("./images/javascript-original.svg")}></img>
          <img src={require("./images/react-original.svg")}></img>
          <img src={require("./images/nodejs-original.svg")}></img>
          <img src={require("./images/express-original.svg")}></img>
          <img src={require("./images/angularjs-original.svg")}></img>
          <img src={require("./images/backbonejs-original.svg")}></img>
          <img src={require("./images/d3js-plain.svg")}></img>
          <img src={require("./images/git-original.svg")}></img>
          <img src={require("./images/mongodb-original.svg")}></img>
          <img src={require("./images/mysql-original.svg")}></img>
          <img src={require("./images/css3-original.svg")}></img>
          <img src={require("./images/html5-original.svg")}></img>
        </div>
      </div>
    );
  }
}

export default About;
