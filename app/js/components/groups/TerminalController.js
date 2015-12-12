import React from "react"
import { connect } from "react-redux";

import {
	Terminal
} from "../controls";


class DumbTerminalController extends React.Component {
	constructor(props) {
		super(props)

		this.state.terminalValue={}
	}

	render() {
		return (
			<div className="terminal">
				<Terminal value={this.props.terminal} />
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