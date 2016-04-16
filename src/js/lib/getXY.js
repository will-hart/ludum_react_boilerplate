const screenXOffset = 400;
const screenYOffset = 300;

const getXY = (radius, theta) => ({
    x: screenXOffset + radius * Math.cos(theta),
    y: screenYOffset + radius * Math.sin(theta)
  });

export default getXY;
