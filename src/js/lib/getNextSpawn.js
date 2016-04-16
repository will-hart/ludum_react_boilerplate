const getNextSpawn = (elapsed) => 30 * Math.log10(elapsed) + 3 * Math.sin(0.2 * elapsed);

export default getNextSpawn;
