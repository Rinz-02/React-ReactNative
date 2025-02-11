import { resolve } from "bluebird";
import React, { Component } from "react";
import UserList from "./UserList";



export function users(fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject("epic fail");
      } else {
        resolve({
          users: [
            { id: 0, name: "First" },
            { id: 1, name: "Second" },
            { id: 2, name: "Third" },
          ],
        });
      }
    }, 2000);
  });
}

export class UserListener extends Component {
  state = {
    error: null,
    loading: "loading...",
    users: [],
  };

  componentDidMount() {
    users().then(
      (result) => {
        this.setState({ loading: null, error: null, users: result.users });
      },

      (error) => {
        this.setState({ loading: null, error });
      }
    );
  }

  render() {
    return (
      <UserList
        error={this.state.error}
        loading={this.state.loading}
        users={this.state.users}
      />
    );
  }
}
