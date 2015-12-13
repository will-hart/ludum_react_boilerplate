import {
  UpdateCondition
} from "../actions";

import TerminalReducer from "./TerminalReducer";

const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateHealth = (state) => {
	return state.condition.health;
};

const updateBattery = (state) => {
	if (state.buttons.charge && state.buttons.mainPower) {
		return state.condition.battery + 1;
	}

	if (state.buttons.battery && !state.buttons.mainPower) {
		let delta = -0.05;

		if (state.buttons.waterPump) {
			delta -= 0.04 * state.buttons.waterFlowRate;
		}

		if (state.buttons.illumination) {
			delta -= 0.03 * state.buttons.brightness;
		}

		if (state.buttons.heater) {
			delta -= 0.05;
		}

		if (state.buttons.nutrientPumps) {
			delta -= 0.05;
		}

		if (state.buttons.coolingFan) {
			delta -= 0.03;
		}

		if (state.buttons.coolingPump) {
			delta -= 0.04 * state.buttons.coolingFlow;
		}

		return clamp(state.condition.battery + delta);
	}

	return clamp(state.condition.battery - 0.05);
};

const updateTemperature = (state) => {
	let temp = state.condition.temperature.system;

	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		temp += 0.05;
	} else {
		return {
			...state.condition.temperature,
			system: temp - 0.03
		};
	}

	if (state.buttons.waterPump) {
		temp += 0.1;
	}

	if (state.buttons.illumination) {
		temp += 0.1;
	}

	if (state.buttons.heater) {
		temp += 0.3;
	}

	if (state.buttons.nutrientPumps) {
		temp += 0.1;
	}

	if (state.buttons.coolingSystem === 4) {
		if (state.buttons.coolingFan) {
			temp -= 0.1;
		}

		if (state.buttons.coolingFlow) {
			temp -= 0.3;
		}
	} else if (state.buttons.coolingFan || state.buttons.coolingFlow) {
		temp += 0.3;
	}

	return {
		...state.condition.temperature,
		system: clamp(temp)
	};
};

const updateLight = (state) => {
	let delta = -0.1;
	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		if (state.buttons.illumination) {
			delta += state.buttons.brightness * 0.1;
		}

		if (state.buttons.heater) {
			delta += state.buttons.brightness * 0.5;
		}
	}

	return clamp(state.condition.water + delta);
};

const updateFood = (state) => {
	let delta = -0.1;

	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		if (state.buttons.nutrientMixer &&
			state.buttons.nutrientPumps) {
			delta += state.buttons.nutrientFlowRate * 0.2;
		}
	}

	return clamp(state.condition.water + delta);
};

const updateWater = (state) => {
	let delta = -0.1;

	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		if (state.buttons.waterPumps) {
			delta += state.buttons.waterFlowRate * 0.2;
		}
	}

	return clamp(state.condition.water + delta);
};

const updateGrowth = (state) => {
	let delta = 0;

	if (state.condition.light > 50 && 
		state.condition.food > 30 && 
		state.condition.water > 30) {
		delta += 0.5;
	}

	return clamp(state.condition.growth + delta);
};

const updateCondition = (state) => {
	const newState = { 
		...state.condition,
		health: updateHealth(state),
		battery: updateBattery(state),
		temperature: updateTemperature(state),
		light: updateLight(state),
		food: updateFood(state),
		water: updateWater(state),
		growth: updateGrowth(state),
		terminal: TerminalReducer(state)
	};

	return newState;
};

const ConditionReducer = (state, action) => {
  switch(action.type) {
  	case UpdateCondition:
  		return updateCondition(state);

    default:
      return { ...state.condition };
  }
};

export default ConditionReducer;
