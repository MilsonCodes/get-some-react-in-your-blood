import React from "react";
import { Link } from "react-router-dom";
import ModalView from "../components/Modal";

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #4CAF50",
  borderRadius: "4px"
};

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p> Welcome to the Homepage!</p>
      <ModalView />
      <Link to="/login">
        <button style={buttonStyle}>Login Page</button>
      </Link>
    </div>
  );
}

export default HomePage;
