import * as actionTypes from './actions';

const initialState = {
  jobs: [],
};

// Need to handle asynchronous calls to an api here
const reducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.SEARCH_ALL_PARAMS:
      return {
        ...state,
        jobs: action.payload
      };
    case actionTypes.SEARCH_BY_DESCRIPTION:
      return {
        ...state,
        jobs: action.payload
      };
    case actionTypes.SEARCH_BY_LOCATION:
      return {
        ...state,
        jobs: action.payload
      };
    default:
      return state;
  };
};

export default reducer;