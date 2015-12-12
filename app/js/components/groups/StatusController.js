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


class DumbStatusController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="control-group">
				<VerticalLabel label="Status" />
				<LedBarGraph label="BATT" value={this.props.condition.battery} />
				<LedBarGraph label="TEMP" value={this.props.condition.temperature} />
				<LedBarGraph label="LIGHT" value={this.props.condition.light} />
				<LedBarGraph label="FOOD" value={this.props.condition.food} />
				<LedBarGraph label="WATER" value={this.props.condition.water} />
				<LedBarGraph label="GROWTH" value={this.props.condition.growth} />
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