import React, { Component } from "react";
import { Typography, Divider, TextField, Button } from "@material-ui/core";
import axios from "axios";
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username
    };
    console.log(user);
    //frontend and backend connection
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      username: ""
    });

    window.location = "/create";
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6">Create User</Typography>
        <Divider style={{ margin: "20px 0px" }} />
        <TextField
          name="username"
          value={this.state.username}
          onChange={this.onChange}
          label="UserName"
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          style={{
            margin: "25px 0px",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white"
          }}
          onClick={this.onSubmit}
        >
          Create
        </Button>
      </React.Fragment>
    );
  }
}