import { BUY_CAKE } from "../action/actionTypes";

const INITIAL_STATE = {
  numOfCakes: 10,
};

export const cakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
