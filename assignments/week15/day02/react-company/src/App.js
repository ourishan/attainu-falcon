import React, { Component } from 'react'
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-flex flex-column vh-100">
        <div className="row">
          <div className="col p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to={'/'} className="nav-link"> Home </Link>
                  <Link to={'/about'} className="nav-link"> About Us </Link>
                  <Link to={'/contact'} className="nav-link"> Contact Us </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    )
  }
}
