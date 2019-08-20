import React from "react";
import Tweet from "./Tweet";
import TweetForm from "./TweetForm";
import { connect } from 'react-redux'
import { create } from '../actions/create'

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        { name: "Mrinal", tweet: "Open React Dev tools" },
        { name: "Shahrukh", tweet: "lol" }
      ]
    };
    this.addTweet = this.addTweet.bind(this);
    this.modifyTweet = this.modifyTweet.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
  }

  addTweet(name, tweet) {
    console.log(name + " " + tweet);
    this.props.create
    // this.setState({
    //   tweets: this.state.tweets.concat({
    //     name: name,
    //     tweet: tweet
    //   })
    // });
  }

  modifyTweet(tweet, index) {
    console.log(tweet);
    // query mongo db api endpoint for tweet update
    let newTweets = [...this.state.tweets];
    newTweets[index].tweet = tweet;
    this.setState({
      tweets: newTweets
    });
  }

  deleteTweet(index) {
    console.log("To delete tweet[" + index + "]");
    this.setState({
      tweets: this.state.tweets.filter(function (item, i) {
        return i !== index;
      })
    });
  }

  render() {
    let listOfTweets = this.props.tweets.map((item, index) => (
      <Tweet
        key={index}
        index={index}
        data={item}
        handleEdit={this.modifyTweet}
        handleDelete={this.deleteTweet}
      />
    ));

    return (
      <div>
        {this.state.tweets.length === 0 ? (
          <p>No tweets to display</p>
        ) : (
            <ul>{listOfTweets}</ul>
          )}
        <TweetForm handleClick={this.addTweet} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps")
  return {
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps")
  return {
    create: function () {
      dispatch(create())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetContainer);
