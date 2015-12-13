const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateFood = (state) => {
	let delta = -3.1;

	if (state.condition.temperature.food >= 80) {
		delta -= 5;
	} else {
		if ((state.buttons.battery && state.condition.battery > 0) || state.buttons.mainPower) {
			if (state.buttons.nutrientMixer && state.buttons.nutrientPumps) {
				delta += 3.1;
				delta += state.buttons.nutrientFlowRate * 0.2;
			}
		}
	}

	return clamp(state.condition.water + delta);
};

const FoodReducer = (state) => {
	return updateFood(state);
}

export default FoodReducer;