import axios from "axios";
import {
  FETCH_ALL_POST,
  FETCH_ALL_POST_FAILED,
  STORE_ALL_POST,
} from "../actions/types";

export const fetchAllPost = () => {
  return {
    type: FETCH_ALL_POST,
  };
};

export const fetchAllPostFailed = () => {
  return {
    type: FETCH_ALL_POST_FAILED,
  };
};

export const storeAllPost = (data) => {
  return {
    type: STORE_ALL_POST,
    data: data,
  };
};

export const fetchPost = () => (dispatch) => {
  dispatch(fetchAllPost());
  axios
    .get("http://localhost:8000/api/post")
    .then((res) =>
      res.data
        ? dispatch(storeAllPost(res.data))
        : dispatch(fetchAllPostFailed())
    )
    .catch((err) => console.log(err));
};
