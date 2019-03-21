import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  }
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {this.state.users.map(user => (
            <h5 key={user.id} className="card-title" />
          ))}

          <p className="card-text">{this.props.post.text}</p>
          <button
            // onClick={ev => props.deletePost(ev, props.id)}
            style={{ marginRight: "10%" }}
            className="btn btn-dark"
          >
            Delete
          </button>
          <button className="btn btn-info">Update</button>
        </div>
      </div>
    );
  }
}
