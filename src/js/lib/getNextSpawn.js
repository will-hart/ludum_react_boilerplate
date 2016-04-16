const getNextSpawn = (elapsed) => elapsed > 100000 ? 500 : 1000 - 0.01 * elapsed;

export default getNextSpawn;
