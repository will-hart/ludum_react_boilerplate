import React from "react";
import {Preload} from "react-preload";
import router from "../../router";

import images from "../../services/ImagesToPreload";


class Preloader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	_handleFinish() {
		router.transitionTo("intro");
	}

// This throws?
// 
// <Preload
// 		className="preload-wrapper"
// 		loadingIndicator={loadingIndicator}
// 		images={images}
// 		onError={this._handleFinish}
// 		onSuccess={this._handleFinish}
// 		resolveOnError={true}
// 		mountChildren={true}>
// 		Loading!
// 	</Preload>

	render() {
		const loadingIndicator = (<div className="loading-indicator">Loading...</div>);

		return (
			<div className="preload-wrapper">
				<button onClick={(e) => this._handleFinish(e)}>Done</button>
			</div>
		);
	}
}

export default Preloader;