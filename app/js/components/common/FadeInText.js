import React from "react"

class FadeInText extends React.Component {
	static propTypes = {
		text: React.PropTypes.node.isRequired,
		delay: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props)

		this.state = {
			visible: false
		};

		this.timeout = null;

		this._startFading = this._startFading.bind(this);
	}

	componentDidMount() {
		this.timeout = setTimeout(this._startFading, this.props.delay);
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	_startFading() {
		this.setState({
			visible: true
		});
	}

	_getText() {
		return this.props.text;
	}

	render() {
		let classes = "fade-text";
		let animDelay = this.props.delay / 1000 + "s";

		return (
			<span className={classes} style={{animationDelay: animDelay}}>
				{this._getText()}
			</span>
		);
	}
}

export default FadeInText;