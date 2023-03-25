import { legacy_createStore as createStore, combineReducers } from 'redux'
import FooterReducer from './FooterReducer'
import MainReducer from './MainReducer'
import HeaderReducer from './HeaderReducer'

let reducers = combineReducers({
    Header: HeaderReducer,
    Main: MainReducer,
    Footer:FooterReducer
})

let store = createStore(reducers)
window.storee = store
export default store