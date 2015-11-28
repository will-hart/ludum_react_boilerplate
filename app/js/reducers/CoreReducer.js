import CounterReducer from "./CounterReducer"
import Storage from "../services/Storage"
const storage = new Storage();

const CoreReducer = (state, action) => {
  if (state === null ||
    typeof(state) === "undefined" ||
    Object.keys(state).length === 0)
  {
      state = storage.load();
  }

  // cache the new state so was can save it to file
  let newState = {};

  switch (action.type) {

    // other actions here

    default:
      newState = {
        ...state,
        counter: CounterReducer(state.counter, action)
      };
  }

  // this may be slow to do every time?
  // TODO is there a better way?
  storage.save(newState);
  return newState;
};

export default CoreReducer;
