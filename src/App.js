import React, { Component, Fragment } from "react";
import Student from "./Student.js";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Student name="Rahul" lang="Angular" />
				<Student name="Arion" lang="React"/>
				<Student name="Avishek" lang="Python"/>
				<h2 style={{margin: 10}}>{this.props.children}</h2>
			</Fragment>
		);
	}
}

export default App;