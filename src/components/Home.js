import React, { Component }     from 'react';
import { Link }                 from 'react-router'
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Adopt a Pet</h2>
            <ul role="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <p className="App-intro">
          We love React!
        </p>
      </div>
    );
  }
}

