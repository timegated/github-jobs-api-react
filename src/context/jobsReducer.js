import {
  SEARCH_ALL,
  SEARCH_DESCRIPTION,
  SEARCH_LOCATION,
  UPDATE_DESC,
  UPDATE_LOC,
  UPDATE_FULLTIME
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
    case UDPATE_DESC:
      return {
        ...state,
        form: payload
      }
    default: 
      return state
  }
};