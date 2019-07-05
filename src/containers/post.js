import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as mockData from "../api.json";
// import { data } from "../api.js"; This is a js array as opposed to json object, can use .map function

function PostComponent({ match }) {
  var validatePost = new Promise(function(resolve, reject) {
    if (match.params.postID >= 0 && match.params.postID < 100) {
      var key = parseInt(match.params.postID);
      var dataSet = mockData[key];
      resolve(dataSet);
    } else {
      var err = new Error("invalid post id: " + match.params.postID);
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

  //   var data = mockData[match.params.postID];

  return (
    // <div key={data.postID}>
    <h2>{/* Post #{data.postID}: {data.title} */}POST</h2>
    /* <p>{data.content}</p> */
    // </div>
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
        <PostComponent />
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
          <Route path="/post/:postID" component={PostComponent} />
        </Router>
      </div>
    );
  }
}

export default PostPage;
