const incrementCounter = () => {
  return {
    type: "INCREMENT"
  }
};

const decrementCounter = () => {
  return {
    type: "DECREMENT"
  }
};

export default {
  incrementCounter,
  decrementCounter
};
