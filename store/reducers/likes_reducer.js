import _ from "lodash";

import { LIKE_JOB } from "../actions/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], "jobkey");
    default:
      return state;
  }
};

export default reducer;
