import { Component } from "react";

export default class Content extends Component {
	render() {
		return (
			<div>
				<input autocomplete="off" id="inputText" type="text" placeholder="입력"></input>
				<input type="button" value="+"></input>
			</div>
		);
	}
}