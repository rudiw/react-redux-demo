import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../action/cakeActions";
import { buyIceCream } from "../action/iceCreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of items: {props.numOfItems}</h2>
      <button onClick={() => props.buyItem()}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    numOfItems: props.cake
      ? state.cake.numOfCakes
      : state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    buyItem: props.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyIceCream("from itemContainer")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
