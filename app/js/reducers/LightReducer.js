const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateLight = (state) => {
	let delta = -3.1;

	if (state.condition.temperature.light >= 80) {
		delta -= 5;
	} else {
		if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
			if (state.buttons.illumination || state.buttons.heater) {
				delta += 3.1;
			}

			if (state.buttons.illumination) {
				delta += state.buttons.brightness * 0.1;
			}

			if (state.buttons.heater) {
				delta += state.buttons.brightness * 0.5;
			}
		}
	}

	return clamp(state.condition.water + delta);
};

const LightReducer = (state) => {
	return updateLight(state);
}

export default LightReducer;