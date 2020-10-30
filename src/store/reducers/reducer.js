import * as actionTypes from '../actions/actionTypes';
import { updateObjects } from '../../utils/updateObjects';

const initialState = {
  jobs: [],
  loading: true,
};

const getJobDataSuccess = (state, action) => {
  return updateObjects(state, {
    jobs: action.data,
    loading: false
  })
};

// Need to handle asynchronous calls to an api here
const reducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.SEARCH_ALL_PARAMS: return getJobDataSuccess(state, action)
    default:
      return state;
  };
};

export default reducer;