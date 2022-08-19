import React from 'react';
import ReactDOM from 'react-dom';
import Component from './pages/Component';
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
  <>
  <BrowserRouter>
  <Component/>
  </BrowserRouter>
   
  </>,
  document.getElementById('root')
);