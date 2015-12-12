import React from "react"

class Terminal extends React.Component {

	static propTypes = {
		value: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.value}
			</div>
		);
	}
}

export default Terminal;