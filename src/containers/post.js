import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as mockData from "../api.json";
// import { data } from "../api.js"; This is a js array as opposed to json object, can use .map function

function PostComponent(props) {
  var validatePost = new Promise(function(resolve, reject) {
    if (props.postID >= 0 && props.postID < 100) {
      var key = parseInt(props.postID);
      var dataSet = mockData[key];
      resolve(dataSet);
    } else {
      var err = new Error("invalid post id: " + props.postID);
      reject(err);
    }
  });

  var tryKey = function() {
    validatePost
      .then(function(fulfilled) {
        console.log(fulfilled);
      })
      .catch(function(error) {
        console.log(error.message);
      });
  };

  tryKey();

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
      postID: 50,
      postBody: {
        title: mockData[50].title,
        content: mockData[50].content
      }
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
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
        <PostComponent postID={this.state.postID} />
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
            title={this.state.postBody.title}
            content={this.state.postBody.content}
            postID={this.state.postID}
          />
        </Router>
      </div>
    );
  }
}

export default PostPage;
