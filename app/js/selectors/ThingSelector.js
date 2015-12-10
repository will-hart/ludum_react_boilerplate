import { createSelector } from "reselect";

const updateThing = (thingCount) => {
  return `There are ${thingCount} things`;
}

const countSelector = state => state.counter;

const ThingSelector = createSelector(
  countSelector,
  thingCount => {
    return {
      thingStatement: updateThing(thingCount)
    };
  }
);

export default ThingSelector;