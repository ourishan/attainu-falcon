import React from "react";
import TweetActions from "./TweetActions";
import { connect } from 'react-redux'
import { update } from '../actions/update'
import { deleteTweet } from '../actions/delete'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.data.tweet,
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete() {
    let flag = window.confirm("Are you sure?");
    if (flag) this.props.delete(this.props.index);
  }

  handleEdit() {
    this.setState({ editable: !this.state.editable });
    // Update tweet list if tweet was modified by clicking on Save
    if (this.state.text !== this.props.data.tweet) {
      this.props.update(this.state.text, this.props.index);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <li>
        {this.state.editable ? (
          <input value={this.state.text} onChange={this.handleChange} />
        ) : (
            <span className="tweetlist-tweet">{this.props.data.tweet}</span>
          )}
        <br />
        <span className="tweetlist-name">{this.props.data.name}</span>
        <TweetActions
          text={this.state.editable ? "Save" : "Edit"}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    update: function (text, index) {
      dispatch(update(text, index))
    },
    delete: function () {
      dispatch(deleteTweet())
    }
  }
}

export default connect(null, mapDispatchToProps)(Tweet);
