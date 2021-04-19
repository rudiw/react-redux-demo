import { BUY_ICE_CREAM } from "./actionTypes";

export const buyIceCream = (tmp) => {
  console.log("tmp:", tmp);
  return {
    type: BUY_ICE_CREAM,
  };
};
