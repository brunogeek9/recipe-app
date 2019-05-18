import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
const API_KEY = "2e516a50ee82c5863e06471e67bdde29";

class App extends Component {
  state = {
    recipes : []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=4`); 
    const data = await api_call.json();
    //guardando a chamada de data no estado da aplicação
    this.setState({ recipes : data.recipes });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;