const getNextSpawn = (elapsed) => Math.pow(Math.E, 3 - 0.03 * elapsed) + Math.sin(elapsed) + 1;

export default getNextSpawn;
