import { createStore } from 'redux'
import CRUDReducer from './reducers/CRUDReducer'

function configureStore() {
    return createStore(
        CRUDReducer,
        window.devToolsExtension && window.devToolsExtension()
        )
}

export default configureStore