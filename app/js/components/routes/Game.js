import React from "react"
import {
	CoolingController,
	LightController,
	NutritionController,
	PowerController,
	StatusController,
	TerminalController,
	WaterController
} from "../groups";

class Game extends React.Component {
	constructor(props) {
		super(props)
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

export default Game;