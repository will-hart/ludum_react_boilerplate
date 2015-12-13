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
import EndView from "../common/EndView";
import Help from "../common/Help";

import {
	updateCondition
} from "../../action-creators";

const GameUpdateRate = 200;

class DumbGame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			helpVisible: false
		};

		this._hideHelp = this._hideHelp.bind(this);
	}

	componentDidMount() {
		this.updateTimer = setInterval(this._update.bind(this), GameUpdateRate);
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

	_getGameView() {
		if (this.props.victory.finished) {
			return (
				<EndView victory={this.props.victory} />
			);
		}

		return (
			<div className="game-area">
				<WaterController />
				<LightController />
				<NutritionController />
				<CoolingController />
				<TerminalController />
				<StatusController />
				<PowerController />
			</div>
		);
	}

	render() {

		return (
			<div className="game-wrapper">					
				{this._getGameView()}

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
    condition: state.condition,
    victory: state.victory
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