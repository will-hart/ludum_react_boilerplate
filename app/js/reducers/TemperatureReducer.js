const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateModuleTemps = (state) => {
	let waterTemp = state.condition.temperature.water - 0.2;
	let lightTemp = state.condition.temperature.light - 0.2;
	let foodTemp = state.condition.temperature.food - 0.2;
	let tempDelta = 0.8;

	// temp increase due to usage
	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		if (state.buttons.waterPumps) {
			waterTemp = clamp(waterTemp + tempDelta);
		}

		if (state.buttons.illumination || state.buttons.heater) {
			lightTemp = clamp(lightTemp + tempDelta);
		}

		if (state.buttons.nutrientPumps) {
			foodTemp = clamp(foodTemp + tempDelta);
		}
	}

	// temp decrease due to cooling
	const fanCool = state.buttons.coolingFan ? 0.2 : 0;
	const pumpCool = state.buttons.coolingPump ? 0.3 * state.buttons.coolingFlow : 0;

	if (state.buttons.coolingSystem === 1) {
		waterTemp -= (fanCool + pumpCool);
	} else if (state.buttons.coolingSystem === 2) {
		lightTemp -= (fanCool + pumpCool);
	} else if (state.buttons.coolingSystem === 3) {
		foodTemp -= (fanCool + pumpCool);
	}
	

	return {
		water: clamp(waterTemp),
		light: clamp(lightTemp),
		food: clamp(foodTemp)
	};
};

const updateSystemTemperature = (state) => {
	let temp = state.condition.temperature.system;

	if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
		temp += 0.03;
	} else {
		return clamp(temp - 0.03);
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
			temp -= 0.2;
		}

		if (state.buttons.coolingPump) {
			temp -= 0.4 * state.buttons.coolingFlow;
		}
	} else if (state.buttons.coolingFan || state.buttons.coolingPump) {
		temp += 0.3;
	}

	return clamp(temp);
};

const TemperatureReducer = (state) => {
	return {
		...state.condition.temperature,
		...updateModuleTemps(state),
		system: updateSystemTemperature(state)
	};
}

export default TemperatureReducer;