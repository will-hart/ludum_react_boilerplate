import CounterReducer from "./CounterReducer"

const initialState = {
  counter: 0
}

const CoreReducer = (state = initialState, action) => {
  switch (action.type) {

    // other actions here

    default:
      return {
        ...state,
        counter: CounterReducer(state.counter, action)
      };
  }
};

export default CoreReducer;
