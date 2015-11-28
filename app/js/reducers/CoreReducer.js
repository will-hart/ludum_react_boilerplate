import CounterReducer from "./CounterReducer"
import Storage from "../services/Storage"
const storage = new Storage();

const CoreReducer = (state = storage.load(), action) => {
  let newState = {};

  switch (action.type) {

    // other actions here

    default:
      newState = {
        ...state,
        counter: CounterReducer(state.counter, action)
      };
  }

  storage.save(newState);
  return newState;
};

export default CoreReducer;
