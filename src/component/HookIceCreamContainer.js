import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../action/iceCreamActions";

function HookIceCream() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dipatch = useDispatch();
  const buyIceCreams = (tmp) => dipatch(buyIceCream(tmp));
  return (
    <div>
      <h2>Num of Ice Creams: {numOfIceCreams}</h2>
      <button onClick={() => buyIceCreams("beli nie ice cream nya")}>
        Buy Ice Cream
      </button>
    </div>
  );
}

export default HookIceCream;
