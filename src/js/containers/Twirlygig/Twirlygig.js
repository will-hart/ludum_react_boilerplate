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
    nextItem: React.PropTypes.number.isRequired,
    obstacles: React.PropTypes.object.isRequired
  }

  _getObstacles(items) {
    return Object.keys(items).map((key) => {
      const obstacle = items[key];
      const coords = getXY(obstacle.r, obstacle.theta);
      return <Obstacle key={obstacle.id} x={coords.x} y={coords.y} type={obstacle.type}/>;
    });
  }

  render () {
    const { actions, isPlaying, nextItem } = this.props;

    return (
      <div className="twirlygig">
        <div className="game-canvas">
          {isPlaying && <Player
            addObject={actions.addObstacle}
            updateFrame={actions.updateFrame}
            spawnDelay={nextItem} />}

          {isPlaying && this._getObstacles(this.props.obstacles)}

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
