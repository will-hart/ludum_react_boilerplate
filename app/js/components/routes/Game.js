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

import {
	updateCondition
} from "../../action-creators";

class DumbGame extends React.Component {
	constructor(props) {
		super(props)
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