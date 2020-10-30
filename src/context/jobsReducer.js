import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION
} from './types';

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
        jobs: action.payload
      }
    default: 
      return state
  }
};