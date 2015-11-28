import alt from "../alt"
import BoilerplateActions from "../actions/BoilerplateActions"

class BoilerplateStore {
  constructor() {
    this.locations = [];

    this.bindListeners({
      handleUpdateLocations: BoilerplateActions.UPDATE_LOCATIONS
    })
  }

  handleUpdateLocations(locations) {
    console.log("Store updated");
    this.locations = locations;
  }
}

export default alt.createStore(BoilerplateStore, "BoilerplateStore");
