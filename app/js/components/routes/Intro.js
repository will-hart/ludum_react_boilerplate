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
				<FadeInText text="Last year\'s crop wasn\'t that great" delay={500} />
				<FadeInText text="and unfortunately we had to let Freddy go..." delay={1500} />
				<FadeInText text="...from altitude." delay={3500} />
				<FadeInText text="Dont let the crop die." delay={4500} />

				<FadeInText text={
					<button onClick={(e) => this._startGame(e)}>
						Start
					</button>} delay={5000} />
			</div>
		);
	}
}

export default Intro;
