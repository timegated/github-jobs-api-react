import React, { useReducer } from 'react';
import axios from 'axios';
import JobsContext from './jobsContext';
import jobsReducer from './jobsReducer';
import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION,
  SINGLE_JOB_POST,
} from '../types';

const JobsState = props => {
  const initState = {
    jobs: null,
    singleJob: null,
    form: {
      desc: '',
      loc: '',
      fulltime: false
    }
  };

  const [state, dispatch] = useReducer(jobsReducer, initState);

  // Async Logic
  const loadJobsInitial = async () => {
    try {
      const res = await axios.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&page=1');
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
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${desc}&full_time=${fulltime}`);
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
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&location=${loc}&full_time=${fulltime}`)
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
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${desc}&location=${loc}&full_time=${fulltime}`);
      dispatch({
        type: SEARCH_ALL,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  // Find Single Job Posting
  const singleJobPost = async (id) => {
    try {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
      dispatch({
        type: SINGLE_JOB_POST,
        payload: res.data
      })
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <JobsContext.Provider value={{
      jobs: state.jobs,
      singleJob: state.singleJob,
      form: state.form,
      loadJobsInitial,
      descriptionSearch,
      locationSearch,
      searchAllParams,
      singleJobPost
    }}>
      {props.children}
    </JobsContext.Provider>
  )
};

export default JobsState;