import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage,
}

export default (rootReducer, rootSaga) => {
  const middlewares = []
  const enhancers = []

  enhancers.push(applyMiddleware(...middlewares))

  const reducer = persistCombineReducers(config, rootReducer)

  const store = createStore(reducer, compose(...enhancers))
  const persistor = persistStore(store)

  return { persistor, store }
}