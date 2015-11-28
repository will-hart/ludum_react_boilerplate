import React from "react"
import { connect } from "react-redux"

import Counter from "../example/Counter"
import {
  incrementCounter,
  decrementCounter
} from "../../action-creators"


const mapStateToProps = (
  state,
  containerProps
) => {
  return {
    value: state.counter
  };
};

const mapDispatchToProps = (
  dispatch,
  containerProps
) => {
  return {
    onIncrement: () => dispatch(incrementCounter()),
    onDecrement: () => dispatch(decrementCounter())
  }
};

const BaseRoute =
  connect(mapStateToProps, mapDispatchToProps)(Counter);

export default BaseRoute;
