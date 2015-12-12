import {
  UpdateCondition
} from "../actions";



const ConditionReducer = (state, action) => {
  switch(action.type) {
  	case UpdateCondition: 
  		console.log("TO DO - UPDATE CONDITION");
  		return { ...state.condition };

    default:
      return { ...state.condition };
  }
};

export default ConditionReducer;
