import React from 'react'
import './app.css'
import Timer from './Timer'

const url = 'https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/quiz.json'
const randomArray = [...Array(10).keys()].sort(_ => Math.random() - .5)
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 59,
            topic: '',
            position: 0,
            score: 0
        }
        this.input = React.createRef()
        this.check = this.check.bind(this)
    }
    componentDidMount() {
        fetch(url).then(r => r.json()).then(r => this.setState({ topic: r[randomArray[this.state.position]] }))
        this.timer = setInterval(_ => this.setState(state => ({ seconds: state.seconds - 1 })), 1000)
    }
    componentDidUpdate() {
        if (this.state.seconds === 0) {
            clearInterval(this.timer)
            alert("Score: " + this.state.score)
        }
    }
    check() {
        if (this.input.current.value === this.state.topic.answer) {
            this.setState({ score: this.state.score + 1 })
        }
        if (this.state.position !== randomArray.length - 1) {
            fetch(url).then(r => r.json()).then(r => this.setState({
                topic: r[randomArray[this.state.position + 1]],
                position: this.state.position + 1
            })).then(this.input.current.value='')
        } else {
            clearInterval(this.timer)
            alert("Score: " + this.state.score)
        }
    }
    render() {
        return (
            <>
                <h2>{this.state.topic.question}</h2>
                <input placeholder="Answer" ref={this.input}></input>
                <button onClick={this.check}>Submit</button>
                <Timer count={this.state.seconds}/>
            </>
        )
    }
}
