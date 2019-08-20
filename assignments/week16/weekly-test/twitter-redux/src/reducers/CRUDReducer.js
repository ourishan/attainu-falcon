const defaultState = {
  tweets: [
    {
      index: 0,
      tweet: "tweet one!",
      name: "user1"
    },
    {
      index: 1,
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
        tweets: [...state.tweets, { index: state.tweets.length, ...action.payload }]
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
    case "DELETE":
      return {
        ...state,
        tweets: state.tweets.filter(item => item.index !== action.payload)
      };

    default:
      return state;
  }
}

export default CRUDReducer;
