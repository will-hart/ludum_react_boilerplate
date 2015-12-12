import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";

import {
	LedDisplay,
	RotarySwitch,
	ToggleSwitch,
	VerticalLabel
} from "../controls";


class DumbLightController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="control-group">
				<VerticalLabel label="Light"  backgroundOffset="0px" />
				<ToggleSwitch label="Lights" buttonName="illumination" isOn={this.props.buttons.illumination} onClick={this.props.onToggleButton} />
				<RotarySwitch label="Brightness" buttonName="brightness" value={this.props.buttons.brightness} onClick={this.props.onIncrementValue} />
				<ToggleSwitch label="Heat" buttonName="heater" isOn={this.props.buttons.heater} onClick={this.props.onToggleButton} />
				<LedDisplay label="Power" isOn={this.props.buttons.mainPower || this.props.buttons.battery} />
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

const mapDispatchToProps = (
  dispatch,
  containerProps
) => {
  return {
    onToggleButton: button => dispatch(toggleButton(button)),
    onIncrementValue: (button, value) => dispatch(incrementValue(button, value))
  };
};

const LightController = connect(mapStateToProps, mapDispatchToProps)(DumbLightController);


export default LightController;