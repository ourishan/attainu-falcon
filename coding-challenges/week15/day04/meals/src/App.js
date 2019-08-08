import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: null
    }
    this.getMeals = this.getMeals.bind(this)
    this.query = React.createRef()
  }

  getMeals(e) {
    e.preventDefault()
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.query.current.value)
      .then(r => r.json())
      .then(r => this.setState(r))
  }
  render() {
    const meals = this.state.meals ? this.state.meals.map((meal, i) => <li key={i}>{meal.strMeal}</li>) : "Not found!"
    return (
      <>
        <h1>Meals</h1>
        <form onSubmit={this.getMeals}>
          <input type="search" ref={this.query}></input>
          <button>Search</button>
        </form>
        <ul>{meals}</ul>
      </>
    )
  }
}

export default App;
