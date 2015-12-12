import {
  IncrementValue,
  ToggleButton,
  UpdateCondition
} from "./actions";

const toggleButton = button => {
  return {
    type: ToggleButton,
    button: button
  }
};

const incrementValue = (button, value) => {
  return {
    type: IncrementValue,
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
  incrementValue,
  toggleButton,
  updateCondition
};
