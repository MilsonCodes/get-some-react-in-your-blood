import React from "react";
import { Link } from "react-router-dom";
import mockData from "../api.json";

function PostComponent({ match }) {
  var validatePost = new Promise(function(resolve, reject) {
    var key = parseInt(match.params.postID);
    if (key >= 0 && key < 100) {
      var dataSet = mockData.find(post => post.postID === key);
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

  var key = parseInt(match.params.postID);
  var data = mockData.find(post => post.postID === key);

  return (
    <div key={data.postID}>
      <h2>
        Post #{data.postID}: {data.title}POST
      </h2>
      <p>{data.content}</p>
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
      postID: parseInt(this.props.match.params.postID)
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
        <div>
          <PostComponent match={this.props.match} />
          <Link to={`/post/${this.state.postID - 1}`}>
            <button onClick={this.prevPage} style={buttonStyle}>
              Previous
            </button>
          </Link>
          <Link to={`/post/${this.state.postID + 1}`}>
            <button onClick={this.nextPage} style={buttonStyle}>
              Next
            </button>
          </Link>
        </div>
        <Link to="/">
          <button style={buttonStyle}>Home</button>
        </Link>
        <div />
      </div>
    );
  }
}

export default PostPage;
