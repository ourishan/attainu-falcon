import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HelloWorld } from './HelloWorld';

class App extends Component {
    render = _ => <HelloWorld name="HelloWorld Component Button!" />
}

ReactDOM.render(<App />, document.getElementById('root'));