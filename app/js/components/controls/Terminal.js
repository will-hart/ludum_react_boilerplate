import React from "react"

import AudioPlayer from "../../services/AudioPlayer";


class Terminal extends React.Component {

	static propTypes = {
		value: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);

		this.audio = new AudioPlayer();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.value.length === 0 && nextProps.value.length > 0) {
			this.audio.play("computerstart");
		}
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