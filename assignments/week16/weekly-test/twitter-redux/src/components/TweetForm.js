import React from "react";
import { connect } from 'react-redux'
import { create } from '../actions/create'

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tweet: ""
    };
    this.getName = this.getName.bind(this);
    this.getTweet = this.getTweet.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getName(e) {
    this.setState({ name: e.target.value });
  }

  getTweet(e) {
    this.setState({ tweet: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.tweet !== "" || this.state.name !== "") {
      this.props.create({name: this.state.name, tweet: this.state.tweet})
    } else {
      alert("Blank tweet / name cannot be posted!");
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.getName}
          value={this.state.name}
          placeholder="Name"
        />
        <textarea
          onChange={this.getTweet}
          value={this.state.tweet}
          placeholder="Tweet"
        />
        <button onClick={this.handleClick}>Post Tweet</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps")
  return {
    create: function (payload) {
      dispatch(create(payload))
    }
  }
}

export default connect(null, mapDispatchToProps)(TweetForm);
