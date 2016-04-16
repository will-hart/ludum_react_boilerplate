import React from 'react';
import './Score.scss';


export default class Score extends React.Component {
  static propTypes = {
    score: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="score">{this.props.score}</div>
    );
  }
}
