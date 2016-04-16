import React from 'react';

import './Player.scss';


export default class Player extends React.Component {
  static propTypes = {
    addObject: React.PropTypes.func.isRequired,
    updateFrame: React.PropTypes.func.isRequired,
    spawnDelay: React.PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);

    this._performUpdate = this._performUpdate.bind(this);
    this._performSpawn = this._performSpawn.bind(this);
    this.updateTimer = null;
    this.spawnTimer = null;
  }

  componentDidMount() {
    this.updateTimer = setTimeout(this._performUpdate, 70);
    this.updateTimer = setTimeout(this._performSpawn, this.props.spawnDelay);
  }

  componentWillUnmount() {
    clearTimeout(this.updateTimer);
    clearTimeout(this.spawnTimer);
  }

  _performUpdate() {
    this.props.updateFrame();
    this.updateTimer = setTimeout(this._performUpdate, 70);
  }

  _performSpawn() {
    this.props.addObject();
    this.updateTimer = setTimeout(this._performSpawn, 1500);
  }

  render() {
    return (
      <div className="player">
        <div className="player-dot"></div>
      </div>
    );
  }
}
