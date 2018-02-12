import React from 'react';
import './index.css';

class Tech extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="about-tags-container">
          <div className="tech-left">Some of my favorite tech...</div>
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
            <img src={require("./images/redis-original.svg")}></img>
            <img src={require("./images/css3-original.svg")}></img>
            <img src={require("./images/html5-original.svg")}></img>
            <img src={require("./images/heroku-original.svg")}></img>
          </div>
          <div className="tech-right">...and much more</div>
        </div>
      </div>
    );
  }
}

export default Tech;