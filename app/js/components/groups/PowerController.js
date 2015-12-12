import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";

import {
	LedDisplay,
	ToggleSwitch,
	VerticalLabel
} from "../controls";

class DumbPowerController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="control-group">
				<VerticalLabel label="Power" />
				<ToggleSwitch label="Main" buttonName="mainPower" isOn={this.props.buttons.mainPower} onClick={this.props.onToggleButton} />
				<ToggleSwitch label="Battery" buttonName="battery" isOn={this.props.buttons.battery} onClick={this.props.onToggleButton} />
				<ToggleSwitch label="Charge" buttonName="charge" isOn={this.props.buttons.charge} onClick={this.props.onToggleButton} />
				<LedDisplay label="Charging" isOn={this.props.buttons.charge} />
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
  };
};

const PowerController = connect(mapStateToProps, mapDispatchToProps)(DumbPowerController);


export default PowerController;