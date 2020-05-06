import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import api from "../utils/api";
import { setUserSession } from "../utils/common";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSignIn = () => {
    const payload = {
      username: this.state.username,
      password: this.state.password,
    };
    const headers = { "content-type": "application/json" };

    api
      .post("/users/login", payload, { headers: headers })
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          this.setState({ errorMessage: "Cannot sign in" });
        }
      });
  };

  render() {
    return (
      <div>
        <br />
        <div>
          <TextField label="username" onChange={this.handleUsernameChange} />
        </div>
        <div>
          <TextField
            label="password"
            type="password"
            onChange={this.handlePasswordChange}
          />
        </div>
        <br />
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSignIn}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
