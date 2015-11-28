const storageKey = "ld_react_store";

const initialState = {
  counter: 0
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
    if (storageDefined) {
      this.data = JSON.parse(localStorage.getItem(storageKey));
    } else {
      this.data = null;
    }

    if (this.data === null) {
      this.data = initialState;
    }

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
