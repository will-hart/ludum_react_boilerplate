import {
  SetValue,
  ToggleButton,
  UpdateCondition
} from "./actions";

const toggleButton = button => {
  return {
    type: ToggleButton,
    button: button
  }
};

const setValue = (button, value) => {
  return {
    type: SetValue,
    button: button,
    value: value
  }
};

const updateCondition = () => {
  return {
    type: UpdateCondition
  };
}

export default {
  setValue,
  toggleButton,
  updateCondition
};
