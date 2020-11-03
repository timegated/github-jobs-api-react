import React, { useReducer } from 'react';
import axios from 'axios';
import SingleJobContext from './singleJobContext';
import singleJobReducer from './singleJobReducer';
import {
  SINGLE_JOB_POST,
} from '../types';

const SingleJobState = props => {
  const initState = {
    singleJob: null,
  };

  const [state, dispatch] = useReducer(singleJobReducer, initState);


  // Find Single Job Posting
  const singleJobPost = async (id) => {
    localStorage.removeItem('singleJob');

    try {
      const res = await axios.get(`https://jobs.github.com/positions/${id}.json`)
      dispatch({
        type: SINGLE_JOB_POST,
        payload: res.data
      })
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SingleJobContext.Provider value={{
      singleJob: state.singleJob,
      singleJobPost
    }}>
      {props.children}
    </SingleJobContext.Provider>
  )
};

export default SingleJobState;