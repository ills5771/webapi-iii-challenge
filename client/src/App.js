import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import axios from "axios";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://iy-users-posts.herokuapp.com/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
