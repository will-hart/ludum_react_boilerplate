import React from "react"
import Counter from "../example/Counter"
import store from "../../store"

import {
  incrementCounter,
  decrementCounter
} from "../../action-creators"

class BaseRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: store.getState()
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(
      () => this.setState({ data: store.getState() }) );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Counter
          value={this.state.data.counter}
          onIncrement={() => { store.dispatch(incrementCounter()) }}
          onDecrement={() => { store.dispatch(decrementCounter()) }}
        />
      </div>);
  }
}

export default BaseRoute;
