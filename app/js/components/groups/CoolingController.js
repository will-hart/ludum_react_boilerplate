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


class DumbCoolingController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="control-group">
				<VerticalLabel label="Cooling" />
				<ToggleSwitch label="Fan" buttonName="coolingFan" isOn={this.props.buttons.coolingFan} onClick={this.props.onToggleButton} />
				<ToggleSwitch label="Pump" buttonName="coolingPump" isOn={this.props.buttons.coolingPump} onClick={this.props.onToggleButton} />
				<RotarySwitch label="Flow Rate" buttonName="coolingFlow" value={this.props.buttons.coolingFlow} onClick={this.props.onIncrementValue} />
				<RotarySwitch label="System" buttonName="coolingSystem" value={this.props.buttons.coolingSystem} onClick={this.props.onIncrementValue} />
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

const CoolingController = connect(mapStateToProps, mapDispatchToProps)(DumbCoolingController);


export default CoolingController;