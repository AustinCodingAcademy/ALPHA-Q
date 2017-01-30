import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import './index.css';
import { Router, Route, hashHistory }  from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/about' component={About} />
    </Router>,
  document.getElementById('root')
);
