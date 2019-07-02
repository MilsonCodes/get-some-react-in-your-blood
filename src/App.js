import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./containers/login";
import HomePage from "./containers/home";

const divStyle = {
  padding: 50,
  textAlign: "center"
  // backgroundColor: "#e7e7e7",
  // height: "84vh" //100% not working
};

function App() {
  return (
    <div style={divStyle}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
