import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';




class InputComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }
    onChangeHandle(e) {
        this.setState({ value: e.target.value })
        this.props.pickState(e)
    }
    render() {
        return (
            <input type="text" onChange={this.onChangeHandle} />
        )
    }
}
class DisplayComponent extends React.Component {
    render() {
        return (
            <h1>{this.props.heading()}</h1>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'hello' }
        this.setDisplay = this.setDisplay.bind(this)
        this.getValue = this.getValue.bind(this)
    }

    getValue(e) {
        this.setState({ value: e.target.value })
    }
    setDisplay() {
        return this.state.value
    }
    render() {
        return (
            <>
                <InputComponent pickState={this.getValue} />
                <DisplayComponent heading={this.setDisplay} />
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
