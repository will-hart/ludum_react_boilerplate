import React from "react";
import RotarySwitch from "./RotarySwitch";

class SystemRotarySwitch extends RotarySwitch {
	_getSystem() {
		const val = this.props.value;
		const data = {
			1: "BATTERY",
			2: "NUTRIENT",
			3: "LIGHT",
			4: "CHARGE"
		};
		const isPowered = this.props.isPowered;

		return isPowered ? data[val] : "\u2000";
	}

	render() {
		const offset = -90 * (this.props.value - 1) + "px 0";

		return (
			<div className="rotary-switch" 
				style={{backgroundPosition: offset}}
				onClick={(e) => this._handleClick(e)}>
				<span className="system-rotary-label">{this._getSystem()}</span>
				{this.props.label}
			</div>
		);
	}
}

export default SystemRotarySwitch;