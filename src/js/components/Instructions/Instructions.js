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
          You are a weird little creature that absorbs shapes that hit it, but is very allergic to shapes of
          a different kind - if you are a green circle and get hit by a red triangle, you die. Luckily, you were
          born with the ability to <strong>shapeshift</strong>!
        </p>

        <p>
          For some strange reason you've been caught in a weird alternate reality where shapes just get flung at
          you for no good reason!
        </p>

        <p>
          To avoid dying your shape must match any shape that hits you. Down the bottom of the screen you will
          see some colours and keys. Hit the button corresponding to the colour of a shape that is about to hit
          you (i.e. for a grey shape, hit the 'A' key before it gets to you).
        </p>

        <p>
          Do it in time and you will survive for a little bit longer.
        </p>

        <button onClick={this.props.newGame}>Start Game</button>
      </div>
    );
  }
}
