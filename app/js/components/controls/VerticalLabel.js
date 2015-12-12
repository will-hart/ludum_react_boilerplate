import React from "react"

class VerticalLabel extends React.Component {
	static propTypes = {
		backgroundOffset: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="vertical-label" style={{backgroundPosition: this.props.backgroundOffset}}>
				&nbsp;
			</div>
		);
	}
}

export default VerticalLabel;