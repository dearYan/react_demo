import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
// import api from '../middleware/api'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, createLogger())
    )

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      // module.hot.accept('../reducers', () => {
      //   console.log("++++++++++++++",require('../reducers'));
      //   const nextRootReducer = require('../reducers').default
      //   store.replaceReducer(nextRootReducer)
      // })
    }
    return store
}
