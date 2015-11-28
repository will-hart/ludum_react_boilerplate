import alt from "../alt"

class BoilerplateActions {
  updateLocations(locations) {
    console.log("Called");
    this.dispatch(locations);
  }
}

export default alt.createActions(BoilerplateActions);
