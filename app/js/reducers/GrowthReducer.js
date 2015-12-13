const clamp = (value) => {
	return Math.min(100, Math.max(value, 0));
};

const updateGrowth = (state) => {
	let delta = 0;

	if (state.condition.light > 30 && 
		state.condition.food > 30 && 
		state.condition.water > 30) {
		delta += 0.325;
	}

	return clamp(state.condition.growth + delta);
};

const GrowthReducer = (state) => {
	return updateGrowth(state);
}

export default GrowthReducer;