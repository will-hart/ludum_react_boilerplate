
const hasWon = (state) => {
  if (state.condition.growth >= 70 && state.condition.health > 0) {
    if (state.buttons.mainPower === false && state.buttons.battery === false) {
      return true;
    }
  }

  return false;
};

const hasLost = (state) => {
  return state.condition.health <= 0;
}

const VictoryReducer = (state, action) => {
  const won = hasWon(state);
  const finished = won || hasLost(state)

  switch (action.type) {
    default:
      return { 
        ...state.victory,
        won,
        finished
     };
  }
};

export default VictoryReducer;
