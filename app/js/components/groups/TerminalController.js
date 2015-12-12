import React from "react"
import { connect } from "react-redux";

import {
	Terminal
} from "../controls";


class DumbTerminalController extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
    const isOn = this.props.condition.terminal.length !== 0;
    let classes = "terminal";

    if (isOn) {
      classes += " on";
    }

		return (
			<div className={classes}>
				<Terminal value={this.props.condition.terminal} />
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