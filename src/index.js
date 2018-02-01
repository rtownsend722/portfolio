import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lead from './lead.js';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Lead/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));