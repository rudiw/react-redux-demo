import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../action/cakeActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of cakes: {props.numOfItems}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
