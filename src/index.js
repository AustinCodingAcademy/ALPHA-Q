import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import './index.css';
import { Router, Route, hashHistory }  from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
    </Router>,
  document.getElementById('root')
);
