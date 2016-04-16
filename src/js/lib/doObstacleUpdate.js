import { defaultAngularSpeed } from '../constants/Attributes';

const doObstacleUpdate = (item, speed) => {
  let newTheta = item.theta + 0.05;

  if (newTheta > 2 * Math.Pi) {
    newTheta = 0;
  }

  return Object.assign({}, item, {
    r: item.r - speed,
    theta: newTheta
  });
};

export default doObstacleUpdate;
