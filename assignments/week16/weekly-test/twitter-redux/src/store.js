import { createStore } from 'redux'
import createReducer from './reducers/createReducer'

function configureStore() {
    return createStore(
        createReducer,
        window.devToolsExtension && window.devToolsExtension()
        )
}

export default configureStore