import React from "react"
import FadeInText from "../common/FadeInText";

import router from "../../router";


class Intro extends React.Component {
	constructor(props) {
		super(props)
	}

	_startGame(e) {
		e.preventDefault();
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
					<FadeInText text="don't" delay={14000} />
					<FadeInText text="let " delay={14400} />
					<FadeInText text="the" delay={14800} />
					<FadeInText text="crops" delay={15200} />
					<FadeInText text="die" delay={15600} />
					<FadeInText text="(or else)" delay={18000} />
				</div>

				<FadeInText text={
					<button className="game-start-button" onClick={(e) => this._startGame(e)}>
						Start {'\u21A0'}
					</button>} delay={18500} />

					<a href="#" className="helper-link" onClick={(e) => this._startGame(e)}>
						Skip Intro
					</a>
			</div>
		);
	}
}

export default Intro;
