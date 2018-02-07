import React from 'react';
import ReactDOM from 'react-dom';



class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
}
  componentDidUpdate(_prevProps, _prevState) {
    ReactDOM.findDOMNode(this.refs.vid).load();
  };

  handleNext(value) {
    if (this.state.slideIndex === 2) {
      return;
    }
    let newIndex = this.state.slideIndex + 1;
    this.setState({
      slideIndex: newIndex
    });
  };

  handlePrev(value) {
    if (this.state.slideIndex === 0) {
      return;
    }
    let newIndex = this.state.slideIndex - 1;
    this.setState({
      slideIndex: newIndex
    });
  };



  render() {
    if (this.state.slideIndex === 0) {
      return (
        <div className="projects-main">
          <a className="button-container" 
            onClick={this.handlePrev.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevleft.svg")}>
            </img>
          </a>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/chattermon.mp4")} type="video/mp4"></source>
            </video>
            <div className="text">
              <div className="title">Chattermon</div>
              <div className="text-description">Terminal based 2 player Pokemon battle game with integrated live chat.</div>
              <div className="tech">Build with React, Express on NodeJS, Socket.io, PassportJS, & PostgreSQL on Sequelize.</div>
            </div>
          </div>
              

          <a className="button-container" 
            onClick={this.handleNext.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevright.svg")}>
            </img>
          </a>
        </div>
      )
    } else if (this.state.slideIndex === 1) {
      return (
        <div className="projects-main">
          <a className="button-container" 
            onClick={this.handlePrev.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevleft.svg")}>
            </img>
          </a>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/sesame.mp4")} type="video/mp4"></source>
            </video>
            <div className="text">Sesa.me</div>
          </div>

          <a className="button-container" 
            onClick={this.handleNext.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevright.svg")}>
            </img>
          </a>
        </div>
      )
    } else if (this.state.slideIndex === 2) {
      return (
        <div className="projects-main">
          <a className="button-container" 
            onClick={this.handlePrev.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevleft.svg")}>
            </img>
          </a>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/lively.mp4")} type="video/mp4"></source>
            </video>
            <div className="text">Live.ly</div>
          </div> 

          <a className="button-container" 
            onClick={this.handleNext.bind(this)}>
            <img 
            className="prev-button" 
            src={require("./images/chevright.svg")}>
            </img>
          </a>
        </div>
      );
    }

  }
}

export default Projects;