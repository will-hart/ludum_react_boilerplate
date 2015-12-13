import React from "react";
import { connect } from "react-redux";
import router from "../../router";
import {
	newGame
} from "../../action-creators";

import AudioPlayer from "../../services/AudioPlayer";
import FadeInText from "../common/FadeInText";


class DumbIntro extends React.Component {
	constructor(props) {
		super(props);

		this.audio = new AudioPlayer();
		this.audioTimeouts = [];
	}

	componentDidMount() {
		this.audioTimeouts.push(this._timedAudio(13900));
		this.audioTimeouts.push(this._timedAudio(14900));
		this.audioTimeouts.push(this._timedAudio(15900));
		this.audioTimeouts.push(this._timedAudio(16900));
		this.audioTimeouts.push(this._timedAudio(17900));
		this.audioTimeouts.push(this._timedAudio(20400));
	}

	componentWillUnmount() {
		this.audioTimeouts.forEach((t) => {
			clearTimeout(t);
		});
	}

	_timedAudio(delay) {
		return setTimeout(() => {this.audio.play("thump");}, delay);
	}

	_startGame(e) {
		e.preventDefault();
		this.props.onNewGame();
		router.transitionTo("game");
	}

	render() {
		return (
			<div className="intro-wrapper">
				<div>
					<FadeInText text="Last year's harvest wasn't great." delay={500} />
					<FadeInText text="Unfortunately, Freddy wasn't delivering the goods," delay={3000} />
					<FadeInText text="so we had to let him go..." delay={5000} />
					<FadeInText text="without a parachute." delay={8000} />
					<FadeInText text="Its fine, I'm sure you can learn on the job." delay={10000} />
					<FadeInText text="Oh, and..." delay={12000} />
					<FadeInText text="don't" delay={13500} />
					<FadeInText text="let " delay={14500} />
					<FadeInText text="the" delay={15500} />
					<FadeInText text="crops" delay={16500} />
					<FadeInText text="die" delay={17500} />
					<FadeInText text="(or else)" delay={20000} />
				</div>

				<FadeInText text={
					<button className="game-start-button" onClick={(e) => this._startGame(e)}>
						Start {'\u21A0'}
					</button>} delay={20500} />

					<a href="#" className="helper-link" onClick={(e) => this._startGame(e)}>
						Skip Intro
					</a>
			</div>
		);
	}
}

const mapStateToProps = (
  state,
  containerProps
) => {
  return {};
};

const mapDispatchToProps = (
  dispatch,
  containerProps
) => {
  return {
    onNewGame: () => dispatch(newGame())
  };
};

const Intro =
  connect(mapStateToProps, mapDispatchToProps)(DumbIntro);

export default Intro;
    