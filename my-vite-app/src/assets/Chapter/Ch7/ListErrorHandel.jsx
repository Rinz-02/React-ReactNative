import React from "react";
import UserList from "./UserList";
import { Component } from "react";
import users from "./exercise/AsynCall";

export default class UserListErrorContainer extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: [],
  };

  componentDidMount() {
    users(true).then(
      (result) => {
        this.setState({ loading: null, error: null, users: result.users });
      },
      (error) => {
        this.setState({ loading: null, error });
      }
    );
  }
  render() {
    if (this.state.error !== null) {
      throw new Error(this.state.error);
    }
    return <UserList {...this.state} />;
  }
}

export class ErrorBoundary extends Component {
  state = {
    error: null,
  };
  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    if (this.state.error === null) {
      return this.props.children;
    } else {
      return <strong>{this.state.error.toString()}</strong>;
    }
  }
}
