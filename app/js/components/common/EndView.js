import React from "react";
import router from "../../router";

class EndView extends React.Component {
	static propTypes = {
		victory: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
	}

	_onEndGame(e) {
		e.preventDefault();
		router.transitionTo("intro");
	}

	render() {
		const endClass = this.props.victory.won ? "won" : "lost";

		return (
			<div className="victory-screen">
				<h3 className={endClass}>{this.props.victory.won ? "YOU WON" : "YOU LOST"}</h3>

				<p>{this.props.victory.message.length > 0 ? this.props.victory.message : " "}</p>

				<button className="victory-button" onClick={(e) => this._onEndGame(e)}>Start Again</button>
			</div>
		);
	}
}

export default EndView;