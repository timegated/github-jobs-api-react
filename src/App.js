import React, { useContext } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import JobPost from './components/JobPost/JobPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobsContext from './context/jobsContext';
import JobState from './context/JobsState';

const App = () => {
  const jobsContext = useContext(JobsContext);

  return (
    <JobState>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/job' component={JobPost} />
        </Switch>
      </Router>
    </JobState>
  )
};

export default App;
