import React from "react"
import connectToStores from "alt/utils/connectToStores"

import BoilerplateActions from "../../actions/BoilerplateActions"
import BoilerplateStore from "../../stores/BoilerplateStore"


class Boilerplate extends React.Component {
  constructor() {
    super()
  }

  static getStores(props) {
    return [BoilerplateStore];
  }

  static getPropsFromStores(props) {
    return BoilerplateStore.getState();
  }

  componentDidMount() {
    console.log("Mounted, updating locations");
    BoilerplateActions.updateLocations([
      "Location 1",
      "Location 2"
    ]);
  }

  _getLocations() {
    let locs = this.props.locations.map((loc) => {
      return (<li>{loc}</li>);
    });

    console.log(locs);

    return locs;
  }

  render() {
    return (
      <div>
        The locations are
        <ul>
          {this._getLocations()}
        </ul>
      </div>
    );
  }
}

export default connectToStores(Boilerplate);
