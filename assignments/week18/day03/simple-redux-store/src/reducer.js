const initialState = {
    value: 0
  };
  
  function mathReducer(state = initialState, action) {
    switch (action.type) {
      case "SQUARE":
        return { ...state, value: action.payload ** 2 };
      case "CUBE":
        return { ...state, value: action.payload ** 3 };
      case "ROOT":
        return { ...state, value: action.payload ** .5 };
      default:
        return state;
    }
  }
  
  export default mathReducer;
  