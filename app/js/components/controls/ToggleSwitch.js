import React from "react"

class ToggleSwitch extends React.Component {
	static propTypes = {
		buttonName: React.PropTypes.string.isRequired,
		isOn: React.PropTypes.bool.isRequired,
		label: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
	}

	_handleClick(e) {
		e.preventDefault();
		console.log("Clicked", this.props.buttonName);
		this.props.onClick(this.props.buttonName);
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