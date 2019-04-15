import axios from "axios";
// import reverseGeocode from "latlng-to-zip";
// import qs from "qs";

import { FETCH_JOBS } from "./actionTypes";

// const ROOT_URL = "http://api.indeed.com/ads/apisearch?";

// const JOB_QUERY_PARAMS = {
//   publisher: "4201738803816157",
//   format: "json",
//   v: "2",
//   latlong: 1,
//   radius: 10,
//   q: "javascript"
// };

// const buildJobsUrl = zip => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   return `${ROOT_URL}${query}`;
// };

export const fetchJobs = () => async dispatch => {
  try {
    // let zip = await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: FETCH_JOBS,
      payload: response
    });
  } catch (e) {
    console.log(e);
  }
};
