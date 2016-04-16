import * as types from '../constants/ActionTypes';

const initialState = {
  items: [],
  nextItem: -1,
  elapsed: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
