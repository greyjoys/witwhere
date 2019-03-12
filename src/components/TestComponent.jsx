import React from 'react';

const TestComponent = props => {
	// ws = new WebSocket({port: 8080})

	function postToWS(){
		console.log('hi')
	}

	return (
		<div>
			<form onSubmit={this.postToWS}>
				<input type="text"></input>
				<input type="submit"></input>
			</form>
			<h1>This is the wrapper component.</h1>
		</div>
)}

export default TestComponent;