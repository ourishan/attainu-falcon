import React, { Component } from 'react'

export class HelloWorld extends Component {
    render = _ => <button>{this.props.name}</button>
}