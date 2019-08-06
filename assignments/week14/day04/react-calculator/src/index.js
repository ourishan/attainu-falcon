import React, { Component } from "react"
import ReactDOM from "react-dom"

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(e) {
        this.setState({ value: e.target.value })
    }

    render() {
        return <input placeholder={this.props.placeholder} onChange={this.onChangeHandle}></input>
    }
}
class Operation extends Component {
    render() {
        return <button>{this.props.operator}</button>
    }
}
class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number1: "", number2: "", result: ""
        }
        this.evaluate = this.evaluate.bind(this)
        this.setNumber1 = this.setNumber1.bind(this)
        this.setNumber2 = this.setNumber2.bind(this)
    }
    
    setNumber1(value) {
        this.setState({
            number1: value
        })
    }
    setNumber2(value) {
        this.setState({
            number2: value
        })
    }
    evaluate(e) {
        this.setState((state, props) => ({
            result: state.number1 + state.number2
        }))
    }

    render() {
        return (
            <>
                <Input placeholder="Number 1" pickValue={this.setNumber1}/>
                <Input placeholder="Number 2" pickValue={this.setNumber2}/>
                <Operation operator="+" onClick={this.evaluate} />
                <Operation operator="-" />
                <Operation operator="*" />
                <Operation operator="/" />
                <Input placeholder="Result" />
            </>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"))