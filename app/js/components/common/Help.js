import React from "react"

class Help extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showHelp: false
		};

		this._onShowHelp = this._onShowHelp.bind(this);
		this._onClose = this._onClose.bind(this);
	}

	_onShowHelp(e) {
		e.preventDefault();
		this.setState({
			showHelp: true
		});
	}

	_onClose(e) {
		e.preventDefault();
		this.props.onClose(e);
	}

	render() {
		const helpText = this.state.showHelp ? (
		<div style={{marginTop: "1em"}}>
			<h3>What is the point?</h3>
			<p>
				OK...let's see. This is a simple game of switches and buttons. You need to get the "GROW" light up to where the little LED above it turns on. At this point your crops are ready for harvest!
			</p>

			<h3>How do I do that?</h3>
			<p>
				To do that, you need to use the "HappTime GrowMaster 2.0 HyperTerminal". It's a modern state of the art machine for keeping your crops in tip-top shape, with only a very minor tendency to overheat and blow up.
			</p>
			<p>
				Use the switches to get the water, light and food LED bar graphs in the status panel between about 30% and 70%. Any more and you may start to damage the plant. Any less and the plant won't be able to grow! 
			</p>
			<p>
				Use the coolant to stop components from overheating - but beware, using the coolant uses more power, and using more power generates more heat! You can run off battery power or mains, and even use the mains to charge your batteries.
			</p>
			<p>
				When the "grow" LED is on, turn everything off to start the harvest.
			</p>

			<p>
				<a href="#" onClick={(e) => this._onClose(e)}>Close</a>
			</p>
				
		</div>
		) : "";

		return (
			<div className="help-wrapper">
				<p>
					HELP?! You want help???
				</p>
				<p>
					<a className="nope" href="#" onClick={(e) => this._onShowHelp(e)}>Yes, I'm weak, but I want to grow strong</a>
					<br/>
					<a href="#" onClick={(e) => this._onClose(e)}>No, what made you think I need help?</a>
				</p>

				{helpText}
			</div>
		);
	}
}

export default Help;