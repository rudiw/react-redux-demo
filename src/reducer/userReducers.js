import {
  GET_USERS_INITIALLY,
  GET_USERS_SUCCESSFULLY,
  GET_USERS_UNSUCCESSFULLY,
} from "../action/actionTypes";

const INITIAL_GET_USERS = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = INITIAL_GET_USERS, action) => {
  switch (action.type) {
    case GET_USERS_INITIALLY:
      return {
        ...state,
        loading: true,
        error: "",
        users: [],
      };
    case GET_USERS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case GET_USERS_UNSUCCESSFULLY:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.error,
      };
    default:
      return state;
  }
};
