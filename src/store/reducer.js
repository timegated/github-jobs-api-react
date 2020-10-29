import * as actionTypes from './actions';

const initialState = {
  jobs: null, 
}

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case actionTypes.SEARCH_ALL_PARAMS:
      return {
        
      };
    case actionTypes.SEARCH_BY_DESCRIPTION:
      return {

      };
    case actionTypes.SEARCH_BY_LOCATION:
      return {

      };
    case actionTypes.SEARCH_BY_FULLTIME:
      return {

      };
    default:
      return state;
  };
};

export default reducer;