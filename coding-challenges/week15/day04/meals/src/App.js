import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    }
    this.getMeals = this.getMeals.bind(this)
    this.query = React.createRef()
  }

  getMeals() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.query.current.value)
      .then(r => r.json())
      // .then(r => console.log(r))
      .then(r => this.setState(r))
  }
  render() {
    const meals = this.state.meals.map((meal, i) => <li>{meal.strMeal}</li>)
    return (
      <>
        <h1>Meals</h1>
        <input type="search" ref={this.query}></input>
        <button onClick={this.getMeals}>Search</button>
        <ul>{meals}</ul>
      </>
    )
  }
}

export default App;
