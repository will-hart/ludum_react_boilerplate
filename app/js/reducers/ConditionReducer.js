import {
  UpdateCondition
} from "../actions";

import BatteryReducer from "./BatteryReducer";
import FoodReducer from "./FoodReducer";
import GrowthReducer from "./GrowthReducer";
import HealthReducer from "./HealthReducer";
import LightReducer from "./LightReducer";
import TemperatureReducer from "./TemperatureReducer";
import TerminalReducer from "./TerminalReducer";
import WaterReducer from "./WaterReducer";


const updateCondition = (state) => {
	const newState = { 
		...state.condition,
		health: HealthReducer(state),
		battery: BatteryReducer(state),
		temperature: TemperatureReducer(state),
		light: LightReducer(state),
		food: FoodReducer(state),
		water: WaterReducer(state),
		growth: GrowthReducer(state),
		terminal: TerminalReducer(state)
	};

	return newState;
};

const ConditionReducer = (state, action) => {
  switch(action.type) {
  	case UpdateCondition:
  		return updateCondition(state);

    default:
      return { ...state.condition };
  }
};

export default ConditionReducer;
