const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateBattery = (state) => {
	if (state.buttons.charge && state.buttons.mainPower) {
		return clamp(state.condition.battery + 1);
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

const BatteryReducer = (state) => {
	return updateBattery(state);
}

export default BatteryReducer;