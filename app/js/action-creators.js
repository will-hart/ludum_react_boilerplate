import {
  GameTick,
  IncrementValue,
  NewGame,
  ToggleButton,
  UpdateCondition
} from "./actions";

const tickGame = () => {
  return {
    type: GameTick
  }
};

const incrementValue = (button, value) => {
  return {
    type: IncrementValue,
    button: button,
    value: value
  }
};

const newGame = () => { 
  return {
    type: NewGame
  };
}

const toggleButton = button => {
  return {
    type: ToggleButton,
    button: button
  }
};

const updateCondition = () => {
  return {
    type: UpdateCondition
  };
}

export default {
  tickGame,
  incrementValue,
  newGame,
  toggleButton,
  updateCondition
};
