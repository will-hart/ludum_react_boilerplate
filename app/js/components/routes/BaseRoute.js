import React from "react";
import { connect } from "react-redux";

import Preloader from "../common/Preloader";


const mapStateToProps = (
  state,
  containerProps
) => {
  return {
    buttons: state.buttons,
    condition: state.condition
  };
};

const BaseRoute =
  connect(mapStateToProps)(Preloader);

export default BaseRoute;
