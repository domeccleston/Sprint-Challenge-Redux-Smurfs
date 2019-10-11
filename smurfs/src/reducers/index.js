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
  }
}