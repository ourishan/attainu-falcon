import React from "react";
import { connect } from 'react-redux'

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
      this.props.handleClick(this.state.name, this.state.tweet);
      this.setState({
        name: "",
        tweet: ""
      });
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
  
}

function mapStateToProps(state) {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetForm);
