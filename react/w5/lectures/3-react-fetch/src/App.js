import React, { Component } from "react";

class App extends Component {
  state = {
    posts: [],
    picInfo: "https://placekitten.com/200/300",
  };

  getNasaPOD = () => {
    let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          picInfo: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  getRequest = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  displayPosts = () => {
    if (this.state.posts.length) {
      return this.state.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      });
    } else {
      return <li>No posts</li>;
    }
  };

  render() {
    return (
      <>
        <h1>Fetch</h1>
        <h3>{this.state.picInfo.title}</h3>
        <button onClick={this.getNasaPOD}>Get NASA POD</button>
        <img src={this.state.picInfo.hdurl} width="400" />
        <br />
        <br />
        <button onClick={this.getRequest}>Projects</button>
        <ul>{this.displayPosts()}</ul>
      </>
    );
  }
}

export default App;
