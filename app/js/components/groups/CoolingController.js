import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";

import {
	LedDisplay,
	RotarySwitch,
	SystemRotarySwitch,
	ToggleSwitch,
	VerticalLabel
} from "../controls";


class DumbCoolingController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const isActive = this.props.buttons.mainPower || 
			(this.props.buttons.battery && this.props.condition.battery > 0);

		return (
			<div className="control-group">
				<VerticalLabel label="Cooling" backgroundOffset="-90px" />
				<ToggleSwitch label="Fan" buttonName="coolingFan" isOn={this.props.buttons.coolingFan} onClick={this.props.onToggleButton} />
				<ToggleSwitch label="Pump" buttonName="coolingPump" isOn={this.props.buttons.coolingPump} onClick={this.props.onToggleButton} />
				<RotarySwitch label="Flow Rate" buttonName="coolingFlow" value={this.props.buttons.coolingFlow} onClick={this.props.onIncrementValue} />
				<SystemRotarySwitch label="Location" buttonName="coolingSystem" value={this.props.buttons.coolingSystem} 
					onClick={this.props.onIncrementValue} isPowered={isActive} />
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