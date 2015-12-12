import {
  IncrementValue,
  ToggleButton
} from "../actions";


const toggleButton = (state, button) => {
  return {
    ...state.buttons,
    [button]: !state.buttons[button]
  };
};

const incrementValue = (state, button) => {
  let val = state.buttons[button]++;
  if (val > 4) {
    val = 1;
  }

  return {
    ...state.buttons,
    [button]: val
  };
};

const ButtonReducer = (state, action) => {
  switch(action.type) {
    case ToggleButton:
      return toggleButton(state, action.button);

    case IncrementValue: 
      return incrementValue(state, action.button);

    default:
      return { ...state.buttons };
  }
};

export default ButtonReducer;
