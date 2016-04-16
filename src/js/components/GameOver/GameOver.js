import React from 'react';
import './GameOver.scss';


export default class GameOver extends React.Component {
  static propTypes = {
    score: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="game-over">
        Game Over! You scored {this.props.score}
      </div>
    );
  }
}
