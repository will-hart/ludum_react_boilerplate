import React from "react"

class LedBarGraph extends React.Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired,
		value: React.PropTypes.number.isRequired, 
		ledOn: React.PropTypes.bool.isRequired,
		powered: React.PropTypes.bool.isRequired
	}

	constructor(props) {
		super(props)
	}

	render() {
		let offsetVal = Math.floor(this.props.value / 10);
		const xOffset = this.props.powered ? (-59 * Math.min(10, Math.max(offsetVal, 0))) : 0;
		const yOffset = (this.props.ledOn && this.props.powered) ? "-150px" : "0px";
		const offset = xOffset + "px " + yOffset;

		return (
			<div className="led-bar-graph" style={{backgroundPosition: offset}}>
				{this.props.label}
			</div>
		);
	}
}

export default LedBarGraph;