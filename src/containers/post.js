import React from "react";
import { Link } from "react-router-dom";
import mockData from "../api.json";
import styled from "styled-components";

const Title = styled.h2`
  color: ${props => (props.primary ? props.primary : "goldenrod")};
  font-size: ${props => (props.size ? props.size : "3em")};
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: ${props => (props.border ? props.border : "")};
  display: inline-block;
  text-transform: capitalize;
`;

const Content = styled.p`
  font-size: 1.5em;
  margin: 25px;
  padding-bottom: 20px;
  display: inline-block;
`;

const Div = styled.div`
  padding: 2rem 1rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  background: white;
`;

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
    <Div key={data.postID}>
      <div>
        <Title size={"2.5em"} border={"1px solid black"}>
          Post #{data.postID}: {data.title}
        </Title>
      </div>
      <Content>{data.content}</Content>
    </Div>
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
    return (
      <div>
        <Title primary={"black"}>Post Page</Title>
        <div>
          <div>
            <PostComponent match={this.props.match} />
          </div>
          <div style={{ marginTop: "2em" }}>
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
