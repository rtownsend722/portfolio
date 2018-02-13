import React from 'react';
import './index.css';
import $ from 'jquery';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.url = 'https://script.google.com/macros/u/0/s/AKfycbwISY7l7gHyLRNuPPlnsFTiPNM5RifG52ukE8gPzUYg-2Vzk9zh/exec';
    this.form = $('contact-form');
  }



  handleClick(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: this.url,
      method: "GET",
      dataType: "json",
      data: {"name": "reb", "email": "email", "note": "stuff"}
    }).success(
      console.log('yay')
    );
  }

  render() {
    return (
      <div>

        <form id="contact-form">
      
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="your full name"/>
          </div>

          <div>
            <label>E-Mail</label>
            <input type="text" name="email" placeholder="e-mail"/>
          </div>
          
          <div>
            <label>Leave me a note!</label>
            <input type="text" name="note" placeholder=""/>
          </div>

          <div>
            <button onClick={this.handleClick.bind(this)} type="submit" id="submit-form">Send!</button>
          </div>

        </form>

      </div>
    );
  }
}