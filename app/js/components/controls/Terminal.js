import React from "react"

class Terminal extends React.Component {

	static propTypes = {
		value: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props)
	}

	_getValue() {
		const vals = this.props.value.split("\n");

		let i = 0;
		return vals.map(v => {
			return <p key={++i}>{v}</p>;
		});
	}

	render() {
		return (
			<div>
				{this._getValue()}
			</div>
		);
	}
}

export default Terminal;