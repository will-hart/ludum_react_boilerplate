import React from "react"

import AudioPlayer from "../../services/AudioPlayer";


class ToggleSwitch extends React.Component {
	static propTypes = {
		buttonName: React.PropTypes.string.isRequired,
		isOn: React.PropTypes.bool.isRequired,
		label: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);

		this.audio = new AudioPlayer();
	}

	_handleClick(e) {
		e.preventDefault();
		this.props.onClick(this.props.buttonName);
		this.audio.play("toggleswitch");
	}

	render() {
		let classes = "toggle-switch";
		if (this.props.isOn) {
			classes += " on";
		}

		return (
			<div className={classes} onClick={(e) => this._handleClick(e)}>
				{this.props.label}
			</div>
		);
	}
}

export default ToggleSwitch;