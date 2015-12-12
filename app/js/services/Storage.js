const storageKey = "ld_react_store";

const initialState = {
  buttons: {
    mainPower: false,
    battery: false,
    charge: false,
    waterPumps: false,
    nutrientMixer: false,
    waterFlowRate: 1,
    illumination: false,
    heater: false,
    brightness: 1,
    nutrientPumps: false,
    nutrientFlowRate: 1,
    coolingFan: false,
    coolingPump: false,
    coolingFlow: 1,
    coolingSystem: 1
  },
  condition: {
    health: 100,
    battery: 50,
    temperature: 10,
    light: 0,
    food: 0,
    water: 0,
    growth: 0,
    terminal: ""
  }
}

// handle running in node (i.e. testing) where there is no local storage
const storageDefined =
  typeof(localStorage) !== "undefined" && localStorage !== null;

class Storage {
  constructor() {
    this.load();
  }

  save(data) {
    if (storageDefined) {
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }

  load() {
    // if (storageDefined) {
    //   this.data = JSON.parse(localStorage.getItem(storageKey));
    // } else {
    //   this.data = null;
    // }

    // if (this.data === null) {
      this.data = initialState;
    // }

    return this.getData();
  }

  clear() {
    if (storageDefined) {
      localStorage.clear(storageKey);
    }

    this.data = {};
  }

  getData() {
    return this.data;
  }
}

export default Storage;
