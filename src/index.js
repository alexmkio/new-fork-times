import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app/App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);