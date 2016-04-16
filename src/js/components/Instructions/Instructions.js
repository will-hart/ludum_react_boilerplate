import React from 'react';
import './Instructions.scss';

export default class Instructions extends React.Component {
  static propTypes = {
    newGame: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="instructions">
        <h1>Twirlygig</h1>
        <p>
          Shapes will come towards you. Hit the button corresponding
          to the shape thats about to hit you.
        </p>
        <button onClick={this.props.newGame}>Start Game</button>
      </div>
    );
  }
}
