import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import newsReducer from './news/newsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
})

export default rootReducer
