import React from "react"

class LedDisplay extends React.Component {	
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		isOn: React.PropTypes.bool.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		let classes = "led-display";
		if (this.props.isOn) {
			classes += " on";
		}

		return (
			<div className={classes}>
				{this.props.isOn === true ? "ON" : "OFF"}
				{this.props.label}
			</div>
		);
	}
}

export default LedDisplay;