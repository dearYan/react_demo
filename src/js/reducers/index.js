const Redux = require('redux');
const ReactRouterRedux = require('react-router-redux');
const actions = require('../actions/index');

const combineReducers = Redux.combineReducers;
const routerReducer = ReactRouterRedux.routerReducer;

function userMessage(state = { users: {}, repos: {} }, action) {
     return state;
}

const rootReducer = combineReducers({
	userMessage : userMessage,
	routing : routerReducer
})

exports.rootReducer = rootReducer