import React from "react"

class VerticalLabel extends React.Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="vertical-label">
				{this.props.label}
			</div>
		);
	}
}

export default VerticalLabel;