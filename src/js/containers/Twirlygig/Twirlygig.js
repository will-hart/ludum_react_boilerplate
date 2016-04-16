import './Twirlygig.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Instructions, Obstacle, Player } from '../../components';
import { getXY } from '../../lib';

import * as ObstacleActions from '../../actions/ObstacleActions';

class Twirlygig extends Component {
  static propTypes = {
    isPlaying: React.PropTypes.bool.isRequired,
    playerType: React.PropTypes.number.isRequired,
    nextItem: React.PropTypes.number.isRequired,
    obstacles: React.PropTypes.object.isRequired
  }

  _getObstacles(items, playerType) {
    return Object.keys(items).map((key) => {
      const obstacle = items[key];
      const coords = getXY(obstacle.r, obstacle.theta);
      return <Obstacle key={obstacle.id} x={coords.x} y={coords.y} playerType={playerType} type={obstacle.type} />;
    });
  }

  onKeyPress(e) {
    console.log(e);
  }

  render () {
    const { actions, isPlaying, nextItem, playerType } = this.props;

    return (
      <div className="twirlygig">
        <div className="game-canvas">
          {isPlaying && <Player
            addObject={actions.addObstacle}
            updateFrame={actions.updateFrame}
            spawnDelay={nextItem}
            changeShape={actions.changeKey} />}

          {isPlaying && this._getObstacles(this.props.obstacles, playerType)}

          {!isPlaying && <Instructions newGame={actions.newGame} />}
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.obstacles.isPlaying,
    playerType: state.obstacles.activeKey,
    nextItem: state.obstacles.nextItem,
    obstacles: state.obstacles.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ObstacleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twirlygig);
