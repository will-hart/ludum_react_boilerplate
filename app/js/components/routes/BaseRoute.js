import React from "react";
import { connect } from "react-redux";
import router from "../../router";


class SplashScreen extends React.Component {
	render() {
		return (
			<div className="splash-wrapper">
				<div className="splash-image">{"\u2000"}</div>
				<button onClick={(e) => router.transitionTo("intro")}>Sounds amazing, take me there  {'\u21A0'}</button>
			</div>
		);
	}
}


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
  connect(mapStateToProps)(SplashScreen);

export default BaseRoute;
