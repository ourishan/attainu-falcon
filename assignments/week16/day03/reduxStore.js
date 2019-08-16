const { createStore } = require('redux')

let counterReducer = (state = { currentScore: 0 }, action) => {
    switch (action.type) {
        case "UPDATE_BONUS":
            state.currentScore += 100
            return state
            break;
        case "LEVEL_COMPLETED":
            state.currentScore += 500
            return state
            break;
        case "LIFE_LOST":
            state.currentScore -= 250
            return state
            break;
        default:
            return state
            break;
    }
}

let store = createStore(counterReducer)

store.subscribe(_ => console.log(store.getState()))

store.dispatch({ type: "UPDATE_BONUS" })
store.dispatch({ type: "LEVEL_COMPLETED" })
store.dispatch({ type: "LIFE_LOST" })