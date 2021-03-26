import { SET_CURRENT_USER } from "../actions/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        email: action.data.email,
        username: action.data.name,
        id: action.data._id,
      };
    default:
      return state;
  }
};

export default authReducer;
