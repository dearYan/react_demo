const Redux = require('redux');
const thunk = require('redux-thunk');
const createLogger = require('redux-logger');
const reducers = require('../reducers/index');

const createStore = Redux.createStore;
const applyMiddleware = Redux.applyMiddleware;
const compose = Redux.compose;
const rootReducer = reducers.rootReducer;

exports.configureStore = function (initialState) {

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


