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
    console.log('index', this.state.slideIndex);
    if (this.state.slideIndex === 0) {
      return (
        <div className="projects-main">
          <button 
          className="next-button" 
          onClick={this.handleNext.bind(this)}>Next
          </button>
          <button 
          className="prev-button" 
          onClick={this.handlePrev.bind(this)}>Prev
          </button>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/chattermon.mp4")} type="video/mp4"></source>
            </video>
            <div className="text">Chattermon</div>
          </div>
        </div>
      )
    } else if (this.state.slideIndex === 1) {
      return (
        <div className="projects-main">
          <button 
          className="next-button" 
          onClick={this.handleNext.bind(this)}>Next
          </button>
          <button 
          className="prev-button" 
          onClick={this.handlePrev.bind(this)}>Prev
          </button>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/sesame.mp4")} type="video/mp4"></source>
            </video>
            <h1>HELLOO</h1>
            <div className="text">Sesa.me</div>
          </div>
        </div>
      )
    } else if (this.state.slideIndex === 2) {
      return (
        <div className="projects-main">
          <button 
          className="next-button" 
          onClick={this.handleNext.bind(this)}>Next
          </button>
          <button 
          className="prev-button" 
          onClick={this.handlePrev.bind(this)}>Prev
          </button>

          <div className="project">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/lively.mp4")} type="video/mp4"></source>
            </video>
            <div className="text">Live.ly</div>
          </div> 
        </div>
      );
    }

  }
}

export default Projects;