import React from "react"

class FadeInText extends React.Component {
	static propTypes = {
		text: React.PropTypes.node.isRequired,
		delay: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
	}

	_getText() {
		return this.props.text;
	}

	render() {
		return (
			<div className="fade-in-text">
				{this._getText()}
			</div>
		);
	}
}

export default FadeInText;