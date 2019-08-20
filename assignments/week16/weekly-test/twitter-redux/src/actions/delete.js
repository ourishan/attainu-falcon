export function deleteTweet(payload) {
    console.log("action: CREATE");
    return {
      type: "DELETE",
      payload: payload
    };
  }
  