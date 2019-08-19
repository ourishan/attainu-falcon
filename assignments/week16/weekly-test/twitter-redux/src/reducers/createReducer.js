const defaultState = {
  tweets: [
    {
      tweet: "tweet one!",
      name: "user1"
    },
    {
      tweet: "tweet two!",
      name: "user2"
    }
  ]
};

function createReducer(state = defaultState, action) {
  console.log("reducer");
  switch (action.type) {
    case "CREATE":
      return Object.assign({}, state, {
        tweets: [...state.tweets].concat(action.payload)
      });

    default:
      return state;
  }
}

export default createReducer;
