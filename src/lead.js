import React from 'react';
import Menu from './menu';
import './index.css';

class Lead extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='lead-body'>
        <Menu className='menu'/>
        <div className='lead-header'>
          <div className='name'>Hi, I'm Rebecca Townsend.</div>
        </div>
      </div>
    );
  }
}

export default Lead;
