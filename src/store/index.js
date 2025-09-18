import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducers'
import rootSaga from './sagas'
const createSagaMiddleware = require('redux-saga').default;

const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export default initializeStore

