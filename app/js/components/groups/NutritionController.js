import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";

import {
	LedDisplay,
	RotarySwitch,
	Spacer,
	ToggleSwitch,
	VerticalLabel
} from "../controls";


class DumbNutritionController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="control-group">
				<VerticalLabel label="Nutrients" backgroundOffset="-60px" />
				<ToggleSwitch label="Release" buttonName="nutrientPumps" isOn={this.props.buttons.nutrientPumps} onClick={this.props.onToggleButton} />
				<RotarySwitch label="Flow Rate" buttonName="nutrientFlowRate" value={this.props.buttons.nutrientFlowRate} onClick={this.props.onIncrementValue} />
				<Spacer />
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

const NutritionController = connect(mapStateToProps, mapDispatchToProps)(DumbNutritionController);


export default NutritionController;