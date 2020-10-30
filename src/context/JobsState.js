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


  return (
    <JobsContext.Provider value={{}}>
      {props.children}
    </JobsContext.Provider>
  )
};

export default JobsState;