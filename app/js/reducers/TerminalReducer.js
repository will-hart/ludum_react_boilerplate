const introMessage = `
	-------------------------------------------------------
	\u2000\u2000\u2000\u2000\u2000\u2000\u2000HappyTime GrowMaster 2.0 HyperTerminal
	-------------------------------------------------------
	\u2000
`;

const terminalStatusLine = (item, value, heating) => {
	let status = "LOW";
	if (value > 70) {
		status = "OVER";
	}	else if (value > 30) {
		status = "OK";
	}

	const isNum = !isNaN(parseFloat(heating)) && isFinite(heating);
	let heatVal = isNum ? Math.round(heating * 10) / 10 + "" : "N/A";

	if (heatVal.length === 1) {
		heatVal += ".0";
	}
	heatVal += "\u00B0";

	const itemPadding = 5 - item.length;
	const statusPadding = 5 - status.length;
	const heatSpacing = 5 - heatVal.length;

	return "\u2000".repeat(4) + 
		item + ":" + "\u2000".repeat(itemPadding) + 
		status + "\u2000".repeat(statusPadding) + 
		heatVal + "\u2000".repeat(heatSpacing);
};

const batteryMessage = (state) => {
	return terminalStatusLine("BATT", state.condition.battery, "-");
};

const waterMessage = (state) => {
	return terminalStatusLine("H20", state.condition.water, state.condition.temperature.water);
};

const lightMessage = (state) => {
	return terminalStatusLine("LGHT", state.condition.light, state.condition.temperature.light);
};

const foodMessage = (state) => {
	return terminalStatusLine("FOOD", state.condition.food, state.condition.temperature.food);
};

const systemMessage = (state) => {
	return terminalStatusLine("SYS", state.condition.temperature.system, state.condition.temperature.system);
};

const growthMessage = (state) => {
	return terminalStatusLine("GROW", state.condition.growth, 0);
};

const plantCondition = (state) => {
	let health = "HEALTHY CONDITION";
	if (state.condition.health < 30) { 
		health = "POOR CONDITION";
	} else if (state.condition.health < 70) {
		health = "FAIR CONDITION";
	}

	if (state.condition.water < 30) {
		health += "\n\u2000\u2000\u2000\u2000DEHYDRATED";
	}

	if (state.condition.light < 30) {
		health += "\n\u2000\u2000\u2000\u2000NO PHOYOSYNTHESIS";
	}

	if (state.condition.food < 30) {
		health += "\n\u2000\u2000\u2000\u2000NO FOOD";
	}

	if (state.condition.growth >= 70) {
		health += "\n\u2000\u2000\u2000\u2000READY FOR HARVEST (TURN OFF TO HARVEST)";
	}

	return health;
};

const timeRemaining = (state) => {
	const weeks = Math.floor(state.victory.timeRemaining / 7);

	return `\u2000
\u2000\u2000\u2000${weeks} WEEKS TO HARVEST`;
}

const updateTerminal = (state) => {
	const isActive = state.buttons.mainPower || 
		(state.buttons.battery && state.condition.battery > 0);

	if (!isActive) {
		return "";
	}

	let term = introMessage + 
		`\u2000\u2000\u2000MODULES:
` +
		batteryMessage(state) + waterMessage(state) + "\n" +
		lightMessage(state) +
		foodMessage(state) + "\n" +
		systemMessage(state) +
		growthMessage(state) + "\n\u2000\n" +
		`\u2000\u2000\u2000PLANT CONDITION:\n\u2000\u2000\u2000\u2000` +
		plantCondition(state) + "\n" + 
		timeRemaining(state);

	return term;
};

const TerminalReducer = (state, action) => {
	return updateTerminal(state);
};

export default TerminalReducer;