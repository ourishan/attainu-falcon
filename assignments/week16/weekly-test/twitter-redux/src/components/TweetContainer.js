import React from "react";
import Tweet from "./Tweet";
import TweetForm from "./TweetForm";
import { connect } from 'react-redux'

class TweetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        { name: "Mrinal", tweet: "Open React Dev tools" },
        { name: "Shahrukh", tweet: "lol" }
      ]
    };
    this.modifyTweet = this.modifyTweet.bind(this);
    this.deleteTweet = this.deleteTweet.bind(this);
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
        <TweetForm />
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

export default connect(mapStateToProps)(TweetContainer);
