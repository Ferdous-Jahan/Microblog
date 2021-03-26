import { SET_CURRENT_USER } from "./types";
import axios from "axios";

export const setCurrentUser = (data) => {
  return {
    type: SET_CURRENT_USER,
    data: data,
  };
};
