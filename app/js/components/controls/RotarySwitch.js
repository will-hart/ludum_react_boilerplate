import React from "react"

class RotarySwitch extends React.Component {	
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		buttonName: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func.isRequired,
		value: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
	}

	_handleClick(e) {
		e.preventDefault();
		this.props.OnClick(this.props.buttonName);
	}

	render() {
		return (
			<div className="rotary-switch" onClick={(e) => this._handleClick(e)}>
				{this.props.value}
				{this.props.label}
			</div>
		);
	}
}

export default RotarySwitch;