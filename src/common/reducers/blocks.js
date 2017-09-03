import {
  FETCH_BLOCK_REQUEST,
  FETCH_BLOCK_SUCCESS,
  FETCH_BLOCK_FAILURE
} from "../actions/blocks";

const STATE_INITIAL = "INITIAL";
const STATE_LOADING = "LOADING";
const STATE_LOADED = "LOADED";
const STATE_ERROR = "ERROR";

const initialState = {
  state: STATE_INITIAL,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOCK_REQUEST:
      return { ...state, state: STATE_LOADING };
    case FETCH_BLOCK_SUCCESS:
      return { ...state, state: STATE_LOADED, data: action.payload };
    case FETCH_BLOCK_FAILURE:
      return { ...state, state: STATE_ERROR, error: action.payload };
    default:
      return state;
  }
}