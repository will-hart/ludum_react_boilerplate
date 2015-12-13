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

const updateVictoryConditions = (state) => {
  const won = hasWon(state);
  const finished = won || hasLost(state);
  let message = "";

  if (!won && finished) {
    if (state.condition.water > 70) { 
      message += "Your plants drowned. ";
    } else if (state.condition.water < 30) {
      message += "Your plants died of thirst. "
    }

    if (state.condition.light > 70) { 
      message += "Your plants were burned by too much light. ";
    } else if (state.condition.light < 30) {
      message += "Your plants didn't have enough light for photosynthesis. "
    }

    if (state.condition.food > 70) { 
      message += "Your plants were poisoned by too much food. ";
    } else if (state.condition.food < 30) {
      message += "Your plants were starved. "
    }
  }

  return { 
    ...state.victory,
    message,
    won,
    finished
 };
};

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

  switch (action.type) {
    case GameTick:
      return updateTimeRemaining(state);

    default:
      return updateVictoryConditions(state);
  }
};

export default VictoryReducer;
