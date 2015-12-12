import React from "react"

class LedBarGraph extends React.Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		value: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		let offset = Math.floor(this.props.value / 10);
		offset = -59 * Math.min(10, Math.max(offset, 0));

		return (
			<div className="led-bar-graph" style={{backgroundPosition: offset}}>
				{this.props.label}
			</div>
		);
	}
}

export default LedBarGraph;