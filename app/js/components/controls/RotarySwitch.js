import React from "react"
import AudioPlayer from "../../services/AudioPlayer";


class RotarySwitch extends React.Component {	
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		buttonName: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired,
		value: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props);

		this.audio = new AudioPlayer();
	}

	_handleClick(e) {
		e.preventDefault();
		this.props.onClick(this.props.buttonName);
		this.audio.play("rotaryswitch");
	}

	render() {
		const offset = -90 * (this.props.value - 1) + "px 0";

		return (
			<div className="rotary-switch" 
				style={{backgroundPosition: offset}}
				onClick={(e) => this._handleClick(e)}>
				{this.props.label}
			</div>
		);
	}
}

export default RotarySwitch;