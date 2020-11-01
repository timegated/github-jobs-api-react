import {
  SINGLE_JOB_POST,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SINGLE_JOB_POST:
      return {
        ...state,
       singleJob: action.payload
      }
    default: 
      return state
  }
};