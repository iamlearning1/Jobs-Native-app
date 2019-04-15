import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from "../actions/actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    case FACEBOOK_LOGIN_FAIL:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;
