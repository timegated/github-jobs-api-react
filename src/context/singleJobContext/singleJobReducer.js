import {
  SINGLE_JOB_POST,
  RESET_SINGLE_JOB
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SINGLE_JOB_POST:
      localStorage.setItem('singleJob', action.payload.id);
      return {
        ...state,
       singleJob: action.payload
      }
    case RESET_SINGLE_JOB:
      return {
        ...state,
        singleJob: action.payload
      }
    default: 
      return state
  }
};