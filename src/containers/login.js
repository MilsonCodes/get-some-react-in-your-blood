import React from "react";
import Form from "../components/Form";

const formStyle = {
  padding: 5
};

const loginField = [
  {
    name: "username",
    placeholder: "Username: ",
    type: "username",
    required: true,
    key: 1
  },
  {
    name: "password",
    placeholder: "Password: ",
    type: "password",
    required: true,
    key: 2
  }
];

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <form style={formStyle}>
          <div style={formStyle}>
            <Form
              fields={loginField}
              onSubmitCallback={this.submit}
              title="Login Page"
              info="Please enter your login credentials"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
