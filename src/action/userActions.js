import axios from "axios";
import {
  GET_USERS_INITIALLY,
  GET_USERS_SUCCESSFULLY,
  GET_USERS_UNSUCCESSFULLY,
} from "./actionTypes";

const getUsersInitially = () => {
  return {
    type: GET_USERS_INITIALLY,
  };
};

const getUsersSuccessfully = (users) => {
  return {
    type: GET_USERS_SUCCESSFULLY,
    payload: users,
  };
};

const getUsersUnsuccessfully = (error) => {
  return {
    type: GET_USERS_UNSUCCESSFULLY,
    error: error,
  };
};

export const getUsers = (tmp) => {
  return (dispatch) => {
    console.log("getUsers:", tmp);
    dispatch(getUsersInitially());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(getUsersSuccessfully(response.data));
      })
      .catch((error) => {
        dispatch(getUsersUnsuccessfully(error.message));
      });
  };
};
