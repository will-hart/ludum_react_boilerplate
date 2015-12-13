import ButtonReducer from "./ButtonReducer";
import ConditionReducer from "./ConditionReducer";
import VictoryReducer from "./VictoryReducer";
import { initialState, Storage } from "../services/Storage";
import { NewGame } from "../actions";

const storage = new Storage();


const CoreReducer = (state = storage.load(), action) => {
  // cache the new state so was can save it to file
  let newState = {};

  switch (action.type) {
    case NewGame:
      newState = { ...initialState };
      break;

    default:
      newState = {
        ...state,
        buttons: ButtonReducer(state, action),
        condition: ConditionReducer(state, action),
        victory: VictoryReducer(state, action)
      };
  }

  storage.save(newState);
  return newState;
};

export default CoreReducer;
