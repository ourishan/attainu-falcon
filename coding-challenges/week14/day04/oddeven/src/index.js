import React from 'react'
import ReactDOM from 'react-dom'

class OddEven extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert(this.state.value % 2 ? "The number entered was Odd" : "The number entered was Even");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Number: <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<OddEven />, document.getElementById('root'))