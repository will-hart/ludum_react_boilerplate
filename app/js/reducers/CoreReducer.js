import ButtonReducer from "./ButtonReducer";
import ConditionReducer from "./ConditionReducer";
import Storage from "../services/Storage";
const storage = new Storage();


const CoreReducer = (state = storage.load(), action) => {
  // cache the new state so was can save it to file
  let newState = {};

  switch (action.type) {
    default:
      newState = {
        ...state,
        buttons: ButtonReducer(state, action),
        condition: ConditionReducer(state, action)
      };
  }

  storage.save(newState);
  return newState;
};

export default CoreReducer;
