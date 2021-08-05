import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';


ReactDOM.render(
  // todo: BrowserRouter - a component that we wrap around our component,
    // todo: all of the functionality of routing that htis library provides

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  
  document.getElementById('root')
);

