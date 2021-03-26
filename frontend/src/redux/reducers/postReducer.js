import {
  FETCH_ALL_POST,
  FETCH_ALL_POST_FAILED,
  STORE_ALL_POST,
} from "../actions/types";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POST:
      return {
        ...state,
        loading: true,
      };
    case STORE_ALL_POST:
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    case FETCH_ALL_POST_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;
