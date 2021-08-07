import React, { Component } from "react";

class JokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "Insert Joke Here",
      isLoading: false,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
        <button onClick={this._fetchJoke}>New Joke</button>
      </div>
    );
  }

  _fetchJoke = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        const url = "https://api.chucknorris.io/jokes/random?category=dev";
        fetch(url)
          .then((res) => res.json())
          .then((jokeJson) => {
            // text of joke into state
            this.setState(
              {
                joke: jokeJson.value,
                isLoading: false,
              },
              () => {
                console.log("new joke stored");
              }
            );
          });
      }
    );
  };
}
export default JokeApp;
