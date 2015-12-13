const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateGrowth = (state) => {
	let delta = 0;

	if (state.condition.light > 50 && 
		state.condition.food > 30 && 
		state.condition.water > 30) {
		delta += 0.25;
	}

	return clamp(state.condition.growth + delta);
};

const GrowthReducer = (state) => {
	return updateGrowth(state);
}

export default GrowthReducer;