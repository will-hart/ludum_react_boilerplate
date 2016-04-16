import {
  ADD_OBSTACLE,
  ADD_SCORE,
  CHANGE_KEY,
  NEW_GAME,
  KILL_PLAYER,
  REMOVE_ITEM,
  UPDATE_FRAME
} from '../constants/ActionTypes';

import {
  doObstacleUpdate,
  getNextSpawn,
  getSpeed,
  getTheta,
  isShapeChanging
} from '../lib';

import {
  deathRadius,
  defaultRadius,
  refreshPeriod
} from '../constants/Attributes';

const initialState = {
  items: {},
  nextItem: -1,
  elapsed: 0,
  activeKey: 0,
  isPlaying: false,
  score: 0,
  lastTick: 0
};

let lastId = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_OBSTACLE:
      return Object.assign({}, state, {
        nextItem: getNextSpawn(state.elapsed),
        items: Object.assign({}, state.items, {
          [lastId]: {
            id: lastId++,
            r: defaultRadius,
            theta: getTheta(),
            type: Math.floor(4 * Math.random())
          }
        })
      });

    case ADD_SCORE:
      return Object.assign({}, state, { score: state.score + action.amount });

    case CHANGE_KEY:
      return Object.assign({}, state, {
        activeKey: action.key
      });

    case KILL_PLAYER:
      return Object.assign({}, state, {
        isPlaying: false,
        items: {},
        nextItem: -1,
        activeKey: 0
      });

    case NEW_GAME:
      return Object.assign({}, initialState, {
        nextItem: 1000,
        isPlaying: true,
        lastTick: new Date().getTime()
      });

    case REMOVE_ITEM:
      return Object.assign({}, state, {
        items: state.items.reduce((acc, item) => {
          if (item.id === action.id) {
            acc[item.id] = item;
          }

          return acc;
        }, {})
      });

    case UPDATE_FRAME:
      const keys = Object.keys(state.items);
      const nowTicks = new Date().getTime();
      const lastFrameDelta = nowTicks - state.lastTick;

      return Object.assign({}, state, {
        elapsed: state.elapsed + lastFrameDelta,
        lastTick: nowTicks,
        items: keys.reduce((acc, key) => {
          if (state.items[key].r > deathRadius) {
            acc[key] = doObstacleUpdate(
              state.items[key],
              getSpeed(state.elapsed, lastFrameDelta, state.items[key].r));
          }

          return acc;
        }, {})
      });

    default:
      return state;
  }
}
