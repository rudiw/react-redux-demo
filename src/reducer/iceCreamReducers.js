import { BUY_ICE_CREAM } from "../action/actionTypes";

const INITIAL_STATE = {
  numOfIceCreams: 20,
};

export const iceCreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
