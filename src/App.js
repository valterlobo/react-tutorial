import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import Form from "./Form";
import Wiki from "./Wiki";

import React, { Component } from "react";

class App extends Component {
  state = {
    data:[] , 
    characters: [
      {
        name: "Charlie",
        job: "DEV",
        // the rest of the data
      },
      {
        name: "MARIE",
        job: "DOCTOR",
        // the rest of the data
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
         <h1>Tutorial</h1>
        
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
         <p>Add a character with a name and a job to the table.</p>
        <Form handleSubmit={this.handleSubmit} />
        <Wiki/>
      </div>
    );
  }
}

export default App;
