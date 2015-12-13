import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";

import {
	LedBarGraph,
	VerticalLabel
} from "../controls";

const isModuleLedOn = (value) => {
	return value < 30 || value > 70;
}

class DumbStatusController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let isActive = this.props.buttons.mainPower || 
			(this.props.buttons.battery && this.props.condition.battery > 0);

		return (
			<div className="control-group">
				<VerticalLabel label="Status"  backgroundOffset="-120px" />
				<LedBarGraph label="BATT" value={this.props.condition.battery} powered={isActive} ledOn={this.props.condition.battery < 20} />
				<LedBarGraph label="TEMP" value={this.props.condition.temperature.system} powered={isActive} ledOn={this.props.condition.temperature.system > 70} />
				<LedBarGraph label="H20" value={this.props.condition.water} powered={isActive} ledOn={isModuleLedOn(this.props.condition.water)} />
				<LedBarGraph label="LIGHT" value={this.props.condition.light} powered={isActive} ledOn={isModuleLedOn(this.props.condition.light)} />
				<LedBarGraph label="FOOD" value={this.props.condition.food} powered={isActive} ledOn={isModuleLedOn(this.props.condition.food)} />
				<LedBarGraph label="GROW" value={this.props.condition.growth} powered={isActive} ledOn={isModuleLedOn(this.props.condition.growth)} />
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

const StatusController = connect(mapStateToProps, mapDispatchToProps)(DumbStatusController);


export default StatusController;