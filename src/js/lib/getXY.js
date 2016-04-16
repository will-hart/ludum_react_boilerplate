const getXY = (radius, theta) => ({
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta)
  });

export default getXY;
