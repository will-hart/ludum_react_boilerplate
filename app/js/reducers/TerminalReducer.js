const introMessage = `
	-------------------------------------------------------
	\u2000\u2000\u2000\u2000\u2000\u2000\u2000HappyTime GrowMaster 2.0 HyperTerminal
	-------------------------------------------------------
	\u2000
`;

const terminalStatusLine = (item, value, heating = 0) => {
	let status = "LOW";
	if (status > 30) status = "OK";
	if (status > 70) status = "HIGH";

	const itemPadding = 10 - item.length;
	const statusPadding = 7 - status.length;

	return "\u2000".repeat(6) + 
		item + ":" + "\u2000".repeat(itemPadding) + 
		status + "\u2000".repeat(statusPadding) + 
		(heating > 70 ? "!! WARNING OVER TEMP" : "") +
		"\n";
};

const batteryMessage = (state) => {
	return terminalStatusLine("BATTERY", state.condition.battery, state.condition.temperature.battery);
};

const waterMessage = (state) => {
	return terminalStatusLine("WATER", state.condition.water, state.condition.temperature.water);
};

const lightMessage = (state) => {
	return terminalStatusLine("LIGHT", state.condition.light, state.condition.temperature.light);
};

const foodMessage = (state) => {
	return terminalStatusLine("FOOD", state.condition.food, state.condition.temperature.food);
};

const systemMessage = (state) => {
	return terminalStatusLine("SYSTEM", state.condition.temperature, state.condition.temperature.system);
};

const growthMessage = (state) => {
	return terminalStatusLine("GROWTH", state.condition.growth, 0);
};


const updateTerminal = (state) => {
	const isActive = state.buttons.mainPower || 
		(state.buttons.battery && state.condition.battery > 0);

	if (!isActive) {
		return "";
	}

	let term = introMessage + 
		batteryMessage(state) + 
		waterMessage(state) +
		lightMessage(state) +
		foodMessage(state) +
		systemMessage(state) +
		growthMessage(state);

	return term;
};

const TerminalReducer = (state, action) => {
	return updateTerminal(state);
};

export default TerminalReducer;