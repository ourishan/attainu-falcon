const defaultState = {
  tweets: [
    {
      index: 1,
      tweet: "tweet one!",
      name: "user1"
    },
    {
      index: 2,
      tweet: "tweet two!",
      name: "user2"
    }
  ]
};

function CRUDReducer(state = defaultState, action) {
  console.log("reducer");
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      };
    case "UPDATE":
      return {
        ...state,
        tweets: state.tweets.map(item => {
          if (item.index === action.payload.index)
            item.tweet = action.payload.text
          return item
        })
      };

    default:
      return state;
  }
}

export default CRUDReducer;
