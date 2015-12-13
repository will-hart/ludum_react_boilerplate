import React from "react";
import { connect } from "react-redux";

import {
	CoolingController,
	LightController,
	NutritionController,
	PowerController,
	StatusController,
	TerminalController,
	WaterController
} from "../groups";

import Help from "../common/Help";

import {
	updateCondition
} from "../../action-creators";

class DumbGame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			helpVisible: false
		};

		this._hideHelp = this._hideHelp.bind(this);
	}

	componentDidMount() {
		this.updateTimer = setInterval(this._update.bind(this), 500);
	}

	componentWillUnmount() {
		clearTimeout(this.updateTimer);
	}

	_update() {
 		this.props.onUpdateCondition();
	}

	_showHelp(e) {
		e.preventDefault();
		this.setState({
			helpVisible: true
		});
		clearTimeout(this.updateTimer);
	}

	_hideHelp(e) {
		e.preventDefault();
		this.setState({
			helpVisible: false
		});
		this.updateTimer = setInterval(this._update.bind(this), 500);
	}

	render() {
		return (
			<div className="game-wrapper">
				<div className="game-area">
					<WaterController />
					<LightController />
					<NutritionController />
					<CoolingController />
					<TerminalController />
					<StatusController />
					<PowerController />
				</div>

				<a href="#" className="helper-link" onClick={(e) => this._showHelp(e)}>
					Help
				</a>

				{this.state.helpVisible === true ? <Help onClose={this._hideHelp} /> : " "}
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
    onUpdateCondition: () => dispatch(updateCondition())
  };
};

const Game =
  connect(mapStateToProps, mapDispatchToProps)(DumbGame);

export default Game;