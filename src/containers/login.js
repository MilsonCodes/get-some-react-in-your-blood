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
    this.onChange = this.onChange.bind(this);
  }

  submit() {
    console.log("Submitted!");
  }

  onChange(event) {
    event.persist();
    console.log(event);
    // let name = event.target.name;
    // this.setState(state => {
    //   return { [name]: event.target.value };
    // });
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
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
