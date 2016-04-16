const doObstacleUpdate = (item) => {
  let newTheta = item.theta + 0.01;

  if (newTheta > 2 * Math.Pi) {
    newTheta = 0;
  }

  return Object.assign({}, item, {
    r: item.r - 10,
    theta: newTheta
  });
};

export default doObstacleUpdate;
