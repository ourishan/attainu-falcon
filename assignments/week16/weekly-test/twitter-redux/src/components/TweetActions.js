import React from "react";

class TweetActions extends React.Component {
  render() {
    return (
      <div className="tweet-actions">
        <button onClick={this.props.handleEdit}>{this.props.text}</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default TweetActions;
