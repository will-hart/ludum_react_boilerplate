import React from "react"

export default class Counter {

  render() {
    console.log("Rendered counter");
    return (
      <div>
        <h1>{this.props.value}</h1>

        <button onClick={() => this.props.onIncrement()}>+</button>
        <button onClick={() => this.props.onDecrement()}>-</button>
      </div>
    );

  }

}
