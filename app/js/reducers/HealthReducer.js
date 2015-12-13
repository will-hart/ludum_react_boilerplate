const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateHealth = (state) => {
	let delta = 0;

	if (state.condition.water > 70) {
		delta -= 0.3;
	} else if (state.condition.water < 30) {
		delta -= 0.15;
	}

	if (state.condition.food > 70) {
		delta -= 0.3;
	} else if (state.condition.food < 30) {
		delta -= 0.15;
	}

	if (state.condition.light > 70) {
		delta -= 0.3;
	} else if (state.condition.light < 30) {
		delta -= 0.15;
	}

	return state.condition.health + delta;
};

const HealthReducer = (state) => {
	return updateHealth(state);
}

export default HealthReducer;