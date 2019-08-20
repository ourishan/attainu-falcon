export function create(payload) {
  console.log("action: CREATE");
  return {
    type: "CREATE",
    payload: payload
  };
}
