import React, { Component } from 'react'

export default class Timer extends Component {
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
                <h4>seconds remaining</h4>
            </>
        )
    }
}
