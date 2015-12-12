import React from "react"

class LedBarGraph extends React.Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		value: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)
	}

	_getValue() {
		return Math.floor(10 * this.props.value / 100);
	}

	render() {
		return (
			<div className="led-bar-graph">
				{this._getValue()}
				{this.props.label}
			</div>
		);
	}
}

export default LedBarGraph;