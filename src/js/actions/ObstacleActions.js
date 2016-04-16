import * as types from '../constants/ActionTypes';

export function addObstacle() {
  return {
    type: types.ADD_OBSTACLE
  };
}

export function changeKey(key) {
  return {
    type: types.CHANGE_KEY,
    key
  };
}

export function killPlayer() {
  return {
    type: types.KILL_PLAYER
  };
}

export function newGame() {
  return {
    type: types.NEW_GAME
  };
}

export function removeItem(id) {
  return {
    type: types.NEW_GAME,
    id
  };
}

export function updateFrame() {
  return {
    type: types.UPDATE_FRAME
  };
}
