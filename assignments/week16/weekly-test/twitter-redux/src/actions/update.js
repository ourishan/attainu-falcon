export function update(text, index) {
    console.log("action: UPDATE");
    return {
      type: "UPDATE",
      payload: {text, index}
    };
  }
  