import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION,
  SINGLE_JOB_POST,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ALL:
      return {
        ...state,
        jobs: action.payload
      }
    case SEARCH_DESCRIPTION:
      return {
        ...state,
        jobs: action.payload
      }
    case SEARCH_LOCATION:
      return {
        ...state,
        jobs: action.payload
      }
    case SINGLE_JOB_POST:
      return {
        ...state,
       singleJob: action.payload
      }
    case UDPATE_DESC:
      return {
        ...state,
        form: payload
      }
    default: 
      return state
  }
};