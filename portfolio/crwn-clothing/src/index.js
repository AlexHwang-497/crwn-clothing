import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';


ReactDOM.render(
  // todo: Provider - is a component that is the parent of everything inside of our applicatoin
    // todo: as the parent, it allows us to get access to all of the things related to the
    // todo: store that we're going to put all of the actaul code we want to store on our reduct state

  <Provider>
    // todo: BrowserRouter - a component that we wrap around our component,
      // todo: all of the functionality of routing that htis library provides
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  
  document.getElementById('root')
);

