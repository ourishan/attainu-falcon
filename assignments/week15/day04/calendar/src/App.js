import React from 'react';
import './App.css';
import Calendar from "./Calendar";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      showCalendar: false
    }
    this.onClickHandle = this.onClickHandle.bind(this)
    this.onFocusHandle = this.onFocusHandle.bind(this)
  }
  onClickHandle(e) {
    this.setState({
      date: `${e.target.textContent}.07.19`
    })
  }
  onFocusHandle() {
    this.setState({ showCalendar: !this.state.showCalendar })
  }
  render() {
    return (
      <>
        <input value={this.state.date} onFocus={this.onFocusHandle}></input>
        {this.state.showCalendar ? <Calendar pickDate={this.onClickHandle} /> : ''}
      </>
    );
  }
}

export default App;
