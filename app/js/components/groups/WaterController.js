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


class DumbWaterController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let isActive = this.props.buttons.mainPower || 
			(this.props.buttons.battery && this.props.condition.battery > 0);
		isActive = isActive && this.props.condition.temperature.water < 70;

		return (
			<div className="control-group">
				<VerticalLabel label="Water" backgroundOffset="-30px" />
				<ToggleSwitch label="Pump" buttonName="waterPumps" isOn={this.props.buttons.waterPumps} onClick={this.props.onToggleButton} />
				<ToggleSwitch label="Nutr. Mix" buttonName="nutrientMixer" isOn={this.props.buttons.nutrientMixer} onClick={this.props.onToggleButton} />
				<RotarySwitch label="Flow Rate" buttonName="waterFlowRate" value={this.props.buttons.waterFlowRate} onClick={this.props.onIncrementValue} />
				<LedDisplay label="Power" isOn={isActive} />
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

const WaterController = connect(mapStateToProps, mapDispatchToProps)(DumbWaterController);


export default WaterController;