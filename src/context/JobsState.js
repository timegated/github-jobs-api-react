import React, { useReducer } from 'react';
import axios from 'axios';
import JobsContext from './jobsContext';
import jobsReducer from './jobsReducer';
import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION
} from './types';

const JobsState = props => {
  const initState = {
    jobs: []
  }

  const [state, dispatch] = useReducer(jobsReducer, initState);


  const loadJobs = async () => {
    try {
      const res = await axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&page=1');
      dispatch({
        type: SEARCH_ALL,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message);      
    }
  };

  return (
    <JobsContext.Provider value={{
      jobs: state.jobs,
      loadJobs
    }}>
      {props.children}
    </JobsContext.Provider>
  )
};

export default JobsState;