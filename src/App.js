import React, { useContext } from 'react'
import Searchbar from './components/Header/Searchbar/Searchbar';
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
        <Searchbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/job/:id' component={JobPost} />
        </Switch>
      </Router>
    </JobState>
  )
};

export default App;
