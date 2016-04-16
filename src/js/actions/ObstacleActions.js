import * as types from '../constants/ActionTypes';
import { deathRadius } from '../constants/Attributes';

export function addObstacle() {
  return (dispatch, getState) => {
    const { obstacles } = getState();
    const { isPlaying } = obstacles;

    if (isPlaying) {
      dispatch({
        type: types.ADD_OBSTACLE
      });
    }
  };
}

export function addScore(amount) {
  return {
    type: types.ADD_SCORE,
    amount
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

const doPlainUpdate = () => ({
  type: types.UPDATE_FRAME
});

export function updateFrame() {
  return (dispatch, getState) => {
    const { obstacles } = getState();
    const { activeKey, items } = obstacles;

    const deadKeys = Object.keys(items).filter((item) => items[item].r < deathRadius + 5);
    if (deadKeys.length > 0) {
      if(deadKeys.find((key) => items[key].type !== activeKey)) {
        dispatch(killPlayer());
        return;
      }

      dispatch(addScore(deadKeys.length));
    }

    dispatch(doPlainUpdate());
  };
}
