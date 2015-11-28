const CounterReducer = (state = 0, action) => {
  if (typeof(state) !== "number") {
    state = 0;
  }

  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
