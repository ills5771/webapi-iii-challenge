import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";
import User from "./User";

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://iy-users-posts.herokuapp.com/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <Posts key={user.id} name={user.name} />
        ))}
      </div>
    );
  }
}
