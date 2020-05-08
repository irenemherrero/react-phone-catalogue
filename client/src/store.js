import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const loggerMiddleware = createLogger()

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    // phonesReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}

export { configureStore }
