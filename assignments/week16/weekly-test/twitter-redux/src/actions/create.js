export function create() {
  console.log("action: CREATE");
  return {
    type: "CREATE",
    payload: {
      tweet: "New Tweet!",
      name: "user3"
    }
  };
}
