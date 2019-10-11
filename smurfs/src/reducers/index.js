import * as types from '../actions/index';

const initialCount = 0;

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const initialForm = {
   name: "",
   age: "",
   height: "",
 }

export const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    default:
      return state;
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
  }
}


export function smurfReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state
    case types.FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: '',
      }
    case types.FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: '',
      }
    case types.FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    case types.ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: '',
      }
    case types.ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs.smurfs,
          action.payload
        ],
        addingSmurf: false,
        error: '',
      }
    case types.FETCH_SMURFS_FAIL:
        return {
          ...state,
          error: action.payload,
        }
    }
}

export function formReducer(state = initialForm, action) {
  switch(action.type) {
    default:
      return state
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
  }
}