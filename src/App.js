import React, { Component, Fragment } from "react";
import Student from "./Student.js";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Student name="Rahul" age={22} lang="Angular" />
				<h2 style={{margin: 10}}>{this.props.children}</h2>
			</Fragment>
		);
	}

	componentWillUnmount() {
		console.log("ComponentWillUnmount is now getting called..");
	}
}

export default App;