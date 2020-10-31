import React, { useReducer } from 'react';
import axios from 'axios';
import JobsContext from './jobsContext';
import jobsReducer from './jobsReducer';
import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION,
  UPDATE_DESC,
  UPDATE_LOC,
  UPDATE_FULL_TIME
} from './types';

const JobsState = props => {
  const initState = {
    jobs: [],
    form: {
      desc: '',
      loc: '',
      fulltime: false
    }
  };

  const [state, dispatch] = useReducer(jobsReducer, initState);


  const updateDesc = (e) => {
    dispatch({
      type: UPDATE_DESC,
      payload: state
    })
  };

  // Async Logic
  const loadJobsInitial = async () => {
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
      form: state.form,
      loadJobsInitial
    }}>
      {props.children}
    </JobsContext.Provider>
  )
};

export default JobsState;