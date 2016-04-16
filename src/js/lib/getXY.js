import { halfWidth, halfHeight } from '../constants/Attributes';

const getXY = (radius, theta) => ({
    x: halfWidth + radius * Math.cos(theta),
    y: halfHeight + radius * Math.sin(theta)
  });

export default getXY;
