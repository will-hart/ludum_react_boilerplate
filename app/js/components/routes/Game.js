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
	tickGame,
	updateCondition
} from "../../action-creators";

const GameUpdateRate = 500;

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
		this.gameTimer = setInterval(this._gameTick.bind(this), 1000);
	}

	componentWillUnmount() {
		clearTimeout(this.updateTimer);
	}

	_gameTick() {
		this.props.onGameTick();
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
		clearTimeout(this.gameTimer);
	}

	_hideHelp(e) {
		e.preventDefault();
		this.setState({
			helpVisible: false
		});
		this.updateTimer = setInterval(this._update.bind(this), GameUpdateRate);
		this.gameTimer = setInterval(this._gameTick.bind(this), 1000);
	}

	_getGameView() {
		if (this.props.victory.finished) {
			clearTimeout(this.updateTimer);
			clearTimeout(this.gameTimer);
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
  	onGameTick: () => dispatch(tickGame()),
    onUpdateCondition: () => dispatch(updateCondition())
  };
};

const Game =
  connect(mapStateToProps, mapDispatchToProps)(DumbGame);

export default Game;