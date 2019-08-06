import React, { Component } from "react"
import ReactDOM from "react-dom"

class Input extends Component {
    constructor(props) {
        super(props)
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(e) {
        this.props.pickValue(parseFloat(e.target.value))
    }

    render() {
        return <input placeholder={this.props.placeholder} onChange={this.onChangeHandle} value={this.props.output} />
    }
}
class Operation extends Component {
    render() {
        return <button onClick={this.props.showResult}>{this.props.operator}</button>
    }
}
class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number1: "", number2: "", result: ""
        }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.mul = this.mul.bind(this)
        this.div = this.div.bind(this)
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
    add() {
        this.setState((state, props) => ({
            result: state.number1 + state.number2
        }))
    }
    sub() {
        this.setState((state, props) => ({
            result: state.number1 - state.number2
        }))
    }
    mul() {
        this.setState((state, props) => ({
            result: state.number1 * state.number2
        }))
    }
    div() {
        this.setState((state, props) => ({
            result: state.number1 / state.number2
        }))
    }

    render() {
        return (
            <>
                <Input placeholder="Number 1" pickValue={this.setNumber1} />
                <Input placeholder="Number 2" pickValue={this.setNumber2} />
                <Operation operator="+" showResult={this.add} />
                <Operation operator="-" showResult={this.sub} />
                <Operation operator="*" showResult={this.mul} />
                <Operation operator="/" showResult={this.div} />
                <Input placeholder="Result" output={this.state.result} />
            </>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("root"))