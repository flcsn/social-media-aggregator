import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'

const Store = () => {
  const rootReducer = combineReducers({
    user: userReducer
  })

  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    ),
  )
}

export default Store