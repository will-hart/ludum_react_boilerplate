import {
  ADD_OBSTACLE,
  CHANGE_KEY,
  NEW_GAME,
  KILL_PLAYER,
  REMOVE_ITEM,
  UPDATE_FRAME
} from '../constants/ActionTypes';

import {
  doObstacleUpdate,
  getNextSpawn,
  getTheta,
  isShapeChanging
} from '../lib';

import {
  deathRadius,
  defaultRadius,
  defaultSpeed,
  refreshPeriod
} from '../constants/Attributes';

const initialState = {
  items: {},
  nextItem: -1,
  elapsed: 0,
  activeKey: 0,
  isPlaying: false
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
            type: 0
          }
        })
      });

    case CHANGE_KEY:
      return Object.assign({}, state, {
        activeKey: action.key
      });

    case KILL_PLAYER:
      return Object.assign({}, state, {
        isPlaying: false
      });

    case NEW_GAME:
      return {
        items: {},
        nextItem: 1000,
        elapsed: 0,
        activeKey: 0,
        isPlaying: true
      };

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

      return Object.assign({}, state, {
        elapsed: state.elapsed + refreshPeriod,
        items: keys.reduce((acc, key) => {
          if (state.items[key].r > deathRadius) {
            acc[key] = doObstacleUpdate(state.items[key], defaultSpeed);
          }

          return acc;
        }, {})
      });

    default:
      return state;
  }
}
