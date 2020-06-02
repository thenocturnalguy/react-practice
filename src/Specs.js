import React, { Component } from "react";

class Specs extends Component {

	constructor(props) {
		super(props);
		this.state = {
         name: props.name,
			age: props.age
		};

      // console.log("Constructor is now getting called..");
   }
   
   static getDerivedStateFromProps(props, state) {
      // console.log("GetDerivedStateFromProps is now getting called..");
      // console.log("New Data: " + props.age, "Current Data: " + state.age);
      if(props.age !== state.age) return {age: props.age};
		return null;
	}

   shouldComponentUpdate(nextProps, nextState) {
      // console.log("ShouldComponentUpdate is now getting called..");
      if(nextState.age > 25) {
         // console.log("Component will not re-render next time..");
         return false;
      } else {
         // console.log("Next Prop to Render: " + nextProps.age, "Next State to Render: " + nextState.age);
         // console.log("Component will re-render next time..");
         return true;
      }
   }

   getSnapshotBeforeUpdate(prevProps, prevState) {
      // console.log("GetSnapshotBeforeUpdate is now getting called..");
      // console.log("Previous Prop Rendered: " + prevProps.age, "Previous State Rendered: " + prevState.age);
      return window.innerHeight;
   }

   render() {
      return (
         <h2>Hello World! This is {this.state.name}, aged {this.state.age}.</h2>
      );
   }

   componentDidUpdate(prevProps, prevState, snapShot) {
      // console.log("ComponentDidUpdate is now getting called..");
      // console.log("Previous Prop Rendered: " + prevProps.age, "Previous State Rendered: " + prevState.age, "Snapshot captured: " + snapShot);
   }
}

export default Specs;