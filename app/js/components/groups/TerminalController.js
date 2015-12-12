import React from "react"
import { connect } from "react-redux";
import {
	incrementValue,
	toggleButton
} from "../../action-creators";


import RotarySwitch from "../controls/RotarySwitch";
import ToggleSwitch from "../controls/ToggleSwitch";


class DumbTerminalController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="terminal">
				Terminal
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

const TerminalController = connect(mapStateToProps, mapDispatchToProps)(DumbTerminalController);


export default TerminalController;