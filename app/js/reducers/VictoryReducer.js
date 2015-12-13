import {
  GameTick
} from "../actions";

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

const failDueToGameExpiry = (state) => {
  return {
    ...state.victory,
    won: false,
    finished: true,
    timeRemaining: 0,
    message: "Your crops weren't ready at harvest!"
  };
}

const updateTimeRemaining = (state) => {
  let timeRemaining = state.victory.timeRemaining - 1;

  if (timeRemaining <= 0) {
    return failDueToGameExpiry(state);
  }

  return {
    ...state.victory,
    timeRemaining
  };
};

const VictoryReducer = (state, action) => {
  const won = hasWon(state);
  const finished = won || hasLost(state)

  switch (action.type) {
    case GameTick:
      return updateTimeRemaining(state);

    default:
      return { 
        ...state.victory,
        message: "",
        won,
        finished
     };
  }
};

export default VictoryReducer;
