import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container" >
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <label>Username: </label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
                    </div>
                    <div className="form-group" >
                        <label>Password: </label>
                        <input type="password" value={this.state.value} onChange={this.handleChange} className="form-control" />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<ReactForm />, document.getElementById('root'));

