import {
  SetValue,
  ToggleButton
} from "../actions";


const toggleButton = (state, button) => {
  return {
    ...state.buttons,
    [button]: !state.buttons[button]
  };
};

const setValue = (state, button, value) => {
  return {
    ...state.buttons,
    [button]: value
  };
};

const ButtonReducer = (state, action) => {
  switch(action.type) {
    case "TOGGLE_BUTTON":
      return toggleButton(state, action.button);

    case "SET_VALUE": 
      return setValue(state, action.button, action.value);

    default:
      return { ...state.buttons };
  }
};

export default ButtonReducer;
