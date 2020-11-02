import React from 'react'
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobState from './context/jobsContext/JobsState';
import SingleJobState from './context/singleJobContext/singleJobState';

const App = () => {
  
  return (
    <JobState>
      <SingleJobState>
      <Router>
          <Switch>
            <Route path='/job/:id' component={JobPost} />
            <Route exact path='/' component={Main} />
        </Switch>
      </Router>
      </SingleJobState>
    </JobState>
  )
};

export default App;
