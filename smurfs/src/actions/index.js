import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";


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
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err })
    })
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios.post(smurfsApi, smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => console.log(err))
}

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function setForm(target) {
  return {
    type: ON_INPUT_CHANGE, 
    payload: {
      name: target.name,
      value: target.value,
    }
  }
}