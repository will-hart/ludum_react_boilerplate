import React from 'react';
import './PlayerKeys.scss';


export default class PlayerKeys extends React.Component {
  render() {
    return (
      <div className="player-keys">

        <p className="legend">CONTROLS</p>

        <div className="player-key-swatch key-0">A</div>

        <div className="player-key-swatch key-1">S</div>

        <div className="player-key-swatch key-2">D</div>

        <div className="player-key-swatch key-3">F</div>
      </div>
    );
  }
}