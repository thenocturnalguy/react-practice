import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App>I'm a Children Prop.</App>, document.getElementById("root"));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById("root"))
}, 4000);