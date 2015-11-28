const storageKey = "ld_react_store";

const initialState = {
  counter: 0
}

class Storage {
  constructor() {
    this.load();
  }

  save(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  load() {
    this.data = JSON.parse(localStorage.getItem(storageKey));
    if (this.data === null) {
      this.data = initialState;
    }

    return this.getData();
  }

  clear() {
    localStorage.clear(storageKey);
    this.data = {};
  }

  getData() {
    return this.data;
  }
}

export default Storage;
