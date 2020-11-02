import React, { useReducer } from 'react';
import axios from 'axios';
import JobsContext from './jobsContext';
import jobsReducer from './jobsReducer';
import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION,
} from '../types';
import { baseURL } from '../../utils/baseURL';

const JobsState = props => {
  const initState = {
    jobs: null,
  };
  const [state, dispatch] = useReducer(jobsReducer, initState);

  // Async Logic
  const loadJobsInitial = async () => {
    try {
      const res = await axios.get(baseURL + '?description=javascript');
      dispatch({
        type: SEARCH_ALL,
        payload: res.data
      })
    } catch (error) {
      console.error(error.message);
    }
  };

  // Find Multiple Jobs

  const descriptionSearch = async (desc, fulltime) => {
    try {
      const res = await axios.get(baseURL + `?description=${desc}&full_time=${fulltime}`);
      dispatch({
        type: SEARCH_DESCRIPTION,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const locationSearch = async (loc, fulltime) => {
    try {
      const res = await axios.get(baseURL + `?location=${loc}&full_time=${fulltime}`)
      dispatch({
        type: SEARCH_LOCATION,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const searchAllParams = async (desc, loc, fulltime) => {
    try {
      const res = await axios.get(baseURL + `description=${desc}&location=${loc}&full_time=${fulltime}`);
      dispatch({
        type: SEARCH_ALL,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <JobsContext.Provider value={{
      jobs: state.jobs,
      loadJobsInitial,
      descriptionSearch,
      locationSearch,
      searchAllParams,
    }}>
      {props.children}
    </JobsContext.Provider>
  )
};

export default JobsState;