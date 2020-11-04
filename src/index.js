import React from 'react';
import ReactDOM from 'react-dom';
import JobState from './context/jobsContext/JobsState';
import SingleJobState from './context/singleJobContext/singleJobState';
import App from './App';
import './index.css';


ReactDOM.render(
    <JobState>
    <SingleJobState>
      <App />
    </SingleJobState>
    </JobState>,
  document.getElementById('root'));

module.hot.accept();