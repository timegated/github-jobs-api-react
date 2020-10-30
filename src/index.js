import React from 'react';
import ReactDOM from 'react-dom';
import JobsState from './context/JobsState';
import App from './App';
import './index.css';


ReactDOM.render(
  <JobsState>
    <App />
  </JobsState>,
  document.getElementById('root'));

module.hot.accept();