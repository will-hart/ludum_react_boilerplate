const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateWater = (state) => {
	let delta = -3.1;
	
	if (state.condition.temperature.water >= 70) {
		delta -= 5;
	} else {
		if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
			if (state.buttons.waterPumps) {
				delta += 3.1;
				delta += state.buttons.waterFlowRate * 0.2;
			}
		}
	}

	return clamp(state.condition.water + delta);
};

const WaterReducer = (state) => {
	return updateWater(state);
}

export default WaterReducer;