import React, {Component} from 'react';
import './index.css';

export default class ProjectBasic extends Component {
  constructor(props) {
    super(props);

  }

  handleProjectClick() {
    document.querySelector('.projects-title').scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <div>
        <div onClick={this.handleProjectClick.bind(this)} className="projects-title">Samples of my most recent work.</div>
        <div className="projects-title-alt">Descriptions of my most recent work. View this page on a wider device for more info!</div>

      <div className="projects-container">

        <div className="project">
          <div className="text">
            <div className="title">Sesa.me</div>
            <div className="text-description">Discreet help-request service for victims of domestic violence and human trafficking.</div>
            <div className="tech">Built with: React, Express on NodeJS, and MongoDB on Sequelize.</div>
          </div>
          <div className="media">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/sesame.mp4")} type="video/mp4"></source>
            </video>
          </div>
        </div>

        <div className="project">
          <div className="media">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/chattermon.mp4")} type="video/mp4"></source>
            </video>
          </div>
          <div className="text">
            <div className="title">Chattermon</div>
            <div className="text-description">Terminal based 2 player Pokemon battle game with integrated live chat.</div>
            <div className="tech">Built with: React, Express on NodeJS, Socket.io, PassportJS, & PostgreSQL on Sequelize.</div>
          </div>
        </div>

        <div className="project">
          <div className="text">
            <div className="title">Live.ly</div>
            <div className="text-description">Personalized live-music event aggregator.</div>
            <div className="tech">Built with: AngularJS, Express on NodeJS, and MongoDB on Sequelize.</div>
          </div>
          <div className="media">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/lively.mp4")} type="video/mp4"></source>
            </video>
          </div>
        </div> 

        <div className="project">
          <div className="media">
            <video ref="vid" autoplay="autoPlay" loop="loop" width="600" height="500">
              <source src={require("./videos/force.mp4")} type="video/mp4"></source>
            </video>
          </div>
          <div className="text">
            <div className="title">Force Visualization</div>
            <div className="text-description">Dynamic visualization of a social network.</div>
            <div className="tech">Built with: D3, SVG, Express, and NodeJS.</div>
          </div>
        </div>

      </div>

    </div>
    );
  }
}
