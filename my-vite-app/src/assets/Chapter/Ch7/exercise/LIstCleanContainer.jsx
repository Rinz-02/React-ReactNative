import React from "react";
import UserList from "../UserList";
import users from "./AsynCall"
import { Component } from "react";


const onClickCancel = (e) => {
  e.preventDefault();
  render(<p>Cancelled</p>, document.getElementById("root"));
};

export default class UserListCleanContainer extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: [],
  };
  componentDidMount() {
    this.job = users();
    this.job.then(
      (result) => {
        this.setState({ loading: null, error: null, users: result.users });
      },
      (error) => {
        this.setState({ loading: null, error: error.message });
      }
    );
  }

  componentWillUnmount() {
    console.log("cancle");
    this.job.cancel();
  }

  render() {
    return <UserList  {...this.state} />;
  }
}
