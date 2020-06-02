import React, { Component } from "react";
import PropTypes from "prop-types";

class Student extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			lang: props.lang
		};
	}
	
	changeState = event => {
		console.log(event);
		this.setState({name: "Changed"});
	}

	render() {
		return (
			<div style={{border:1, borderStyle: "solid", margin: 10, padding: 10}}>
				<h2>Hello World! This is {this.state.name}.</h2>
				<p>I'm an Amateur {this.state.lang} Developer.</p>
				<button onClick={event => this.changeState(event)}>Change State</button>
			</div>
		);
	}
}

Student.propTypes = {
	name: PropTypes.string.isRequired,
	lang: PropTypes.string
};

Student.defaultProps = {
	name: "Moumita"
}

export default Student;