const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateHealth = (state) => {
	let delta = 0;

	if (state.condition.water > 70) {
		delta -= 0.1;
	}

	if (state.condition.food > 70) {
		delta -= 0.1;
	}

	if (state.condition.light > 70) {
		delta -= 0.1;
	}

	return state.condition.health + delta;
};

const HealthReducer = (state) => {
	return updateHealth(state);
}

export default HealthReducer;