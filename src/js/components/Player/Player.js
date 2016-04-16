import React from 'react';
import { mouseTrap } from 'react-mousetrap';

import { refreshPeriod } from '../../constants/Attributes';

import './Player.scss';


class Player extends React.Component {
  static propTypes = {
    addObject: React.PropTypes.func.isRequired,
    updateFrame: React.PropTypes.func.isRequired,
    spawnDelay: React.PropTypes.number.isRequired,
    changeShape: React.PropTypes.func.isRequired,
    isPlaying: React.PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this._performUpdate = this._performUpdate.bind(this);
    this._performSpawn = this._performSpawn.bind(this);

    this.updateTimer = null;
    this.spawnTimer = null;
    this.isPlaying = true;
  }

  componentWillMount() {
    const { changeShape } = this.props;

    this.props.bindShortcut('a', () => changeShape(0));
    this.props.bindShortcut('s', () => changeShape(1));
    this.props.bindShortcut('d', () => changeShape(2));
    this.props.bindShortcut('f', () => changeShape(3));
  }

  componentDidMount() {
    this.updateTimer = setTimeout(this._performUpdate, refreshPeriod);
    this.spawnTimer = setTimeout(this._performSpawn, this.props.spawnDelay);
  }

  componentWillUnmount() {
    this.isPlaying = false;

    clearTimeout(this.updateTimer);
    clearTimeout(this.spawnTimer);

    this.props.unbindShortcut('a');
    this.props.unbindShortcut('s');
    this.props.unbindShortcut('d');
    this.props.unbindShortcut('f');
  }

  _performUpdate() {
    if (this.isPlaying)
    {
      this.props.updateFrame();
      this.updateTimer = setTimeout(this._performUpdate, refreshPeriod);
    }
  }

  _performSpawn() {
    if (this.isPlaying)
    {
      this.props.addObject();
      this.spawnTimer = setTimeout(this._performSpawn, this.props.spawnDelay);
    }
  }

  render() {
    return (
      <div className="player">
        <div className="player-dot"></div>
      </div>
    );
  }
}

export default mouseTrap(Player);
