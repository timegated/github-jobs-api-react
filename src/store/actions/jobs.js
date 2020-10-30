import * as actionTypes from './actionTypes';
import axios from '../../axios/instance';

export const getJobs = () => {
  return dispatch => {
    axios.get('/')
      .then(res => {
        const jobs = [];
        for (let key in res.data) {
          jobs.push({
            ...res.data[key],
            id: key
          });
         }
      })
  }
};