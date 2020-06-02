/**
 * # Lifecycle of a React Component #
 * 
 * A. Mounting Phase..
 * 
 * Constructor: 
 * 	1. Mounted before a Component.
 * 	2. super(props) required to call if you want to use
 * 	props inside the constructor.
 * 	3. Normally, used to initialize the local state of a variable and bind event handlers to an instance.
 * 
 * GetDerivedStateFromProps:
 * 	1. Mounted after Constructor is called and before Render.
 * 	2. Runs both on initial mount and subsequent updates.
 * 	3. Must return null or state object.
 * 	4. Rarely used only when the state depends on props over time.
 * 	5. Doesn't have access to component instances.
 * 
 * Render:
 * 	1. Must required method in Class Component.
 * 	2. Examines props and states.
 * 	3. Returns - 
 * 		i. JSX.
 * 		ii. Array and Fragments.
 * 		iii. Portals.
 * 		iv. String, numbers, boolean and null.
 * 	4. It's a pure function.
 * 
 * ComponentDidMount:
 * 	1. Invoked after the render method.
 * 	2. Executed once in a lifecycle.
 * 	3. AJAX, API calls, DOM or state updates should be done.here. Any JS Frameworks should be integrated here. Also timer functions like setTimeout or setInterval should be used here.
 * 
 * B. Updating Phase..
 * 
 * GetDerivedStateFromProps
 * 
 * ShouldComponentUpdate:
 * 	1. Used to let React know if a Component's output should be changed by current change in props and state.
 * 	2. Invoked before re-rendering when new props or state is recieved.
 * 	3. Returns true by default. render() will not be called if it return false.
 * 	
 * GetSnapshotBeforeUpdate:
 * 	1. Invoked just before the virtual DOM is getting updated.
 * 	2. Helps to take snapshots of the current DOM and record some attributes (ex: scroll position).
 * 
 * ComponentDidUpdate:
 * 	1. Invoked after Component is updated. Will not be invoked if shouldComponentUpdate return false.
 * 	2. Used to trigger some 3rd-party library for them to reload and get updated.
 * 	3. Not called on initial render.
 * 
 * C. Unmounting Phase..
 * 
 * ComponentWillUnmount:
 * 	1. Invoked immediately before a component is unmounted or destroyed and removed from the DOM.
 * 	2. Used for cleanup like invalidating timers, canelling network requests.
 * 
 * These methods can only be used in Class-based Component. Cannot be used on Function-based Component.
 */

import React, { Component } from "react";
import Specs from "./Specs.js";
import PropTypes from "prop-types";

class Student extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			age: props.age,
			lang: props.lang
		};

		// console.log("Constructor is now getting called..");
	}

	static getDerivedStateFromProps(props, state) {
		// console.log("GetDerivedStateFromProps is now getting called..");
		
		return null;
	}
	
	changeState = event => {
		// console.log(event);
		this.setState({age: this.state.age + 1});
	}

	render() {
		// console.log("Render is now getting called.");
		return (
			<div style={{border:1, borderStyle: "solid", margin: 10, padding: 10}}>
				<Specs name={this.state.name} age={this.state.age}/>
				<p>I'm an Amateur {this.state.lang} Developer.</p>
				<button onClick={event => this.changeState(event)}>Change State</button>
			</div>
		);
	}

	componentDidMount() {
		// console.log("ComponentDidMount is now getting called.");
	}
}

Student.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number,
	lang: PropTypes.string
};

Student.defaultProps = {
	name: "Moumita"
}

export default Student;

