import React, { useContext } from 'react'
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobsContext from './context/jobsContext/jobsContext';
import JobState from './context/jobsContext/JobsState';
import SingleJobState from './context/singleJobContext/singleJobState';

const App = () => {
  const jobsContext = useContext(JobsContext);

  return (
    <JobState>
      <SingleJobState>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/job/:id' component={JobPost} />
        </Switch>
      </Router>
      </SingleJobState>
    </JobState>
  )
};

export default App;
