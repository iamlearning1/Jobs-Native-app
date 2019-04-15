import { FETCH_JOBS } from "../actions/actionTypes";

const intialState = {
  results: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
