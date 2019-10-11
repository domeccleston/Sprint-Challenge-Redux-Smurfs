import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const smurfsApi = "http://localhost:3333/smurfs";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get(smurfsApi)
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data[0].name })
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err })
    })
};

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
