const defaultState = {
  tweets: [
    {
      id:1,
      tweet: "tweet one!",
      name: "user1"
    },
    {
      id:2,
      tweet: "tweet two!",
      name: "user2"
    }
  ]
};

function createReducer(state = defaultState, action) {
  console.log("reducer");
  switch (action.type) {
    case "CREATE":
      return  { ...state,
        tweets: [...state.tweets, action.payload]
      };

    default:
      return state;
  }
}

export default createReducer;
