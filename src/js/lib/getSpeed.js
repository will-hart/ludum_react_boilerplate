import { defaultSpeed } from '../constants/Attributes';

// TODO: make the objects faster as they get closer
// TODO: make the objects faster as the game progresses
const getSpeed = (elapsed, lastDelta, radius) => defaultSpeed * lastDelta / 1000;

export default getSpeed;
