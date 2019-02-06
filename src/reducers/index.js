import { combineReducers } from 'redux'
import FetchReducer from './FetchReducer'
import FavoriteReducer from './FavoriteReducer'

export default combineReducers({
    fetch: FetchReducer,
    favList: FavoriteReducer
})