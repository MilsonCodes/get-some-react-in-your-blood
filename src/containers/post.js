import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as mockData from "../api.json";
// import { data } from "../api.js"; This is a js array as opposed to json object, can use .map function

function PostComponent(props) {
  return (
    <div key={props.postID}>
      <h2>
        Post #{props.postID}: {props.title}
      </h2>
      <p>{props.content}</p>
    </div>
  );
}

const buttonStyle = {
  height: 25,
  width: 100,
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  border: "2px solid #4CAF50",
  borderRadius: "4px"
};

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postID: 50
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  getTitle() {
    return mockData[this.state.postID].title;
  }

  getContent() {
    return mockData[this.state.postID].content;
  }

  nextPage() {
    this.setState(state => {
      return { postID: state.postID + 1 };
    });
  }

  prevPage() {
    this.setState(state => {
      return { postID: state.postID - 1 };
    });
  }

  render() {
    console.log(this.state.postID);
    return (
      <div>
        <h1>Post Page</h1>
        <PostComponent
          title={mockData[0].title}
          content={mockData[0].content}
          postID={mockData[0].postID}
        />
        <div>
          <Link to="/post/:postId-1">
            <button onClick={this.prevPage} style={buttonStyle}>
              Previous
            </button>
          </Link>
          <Link to="/post/:postId+1">
            <button onClick={this.nextPage} style={buttonStyle}>
              Next
            </button>
          </Link>
        </div>
        <Link to="/">
          <button style={buttonStyle}>Home</button>
        </Link>
        <div />
        <Router>
          <Route
            path="/post/:postID"
            component={PostComponent}
            title={this.getTitle}
            content={this.getContent}
            postID={this.state.postID}
          />
        </Router>
      </div>
    );
  }
}

export default PostPage;
