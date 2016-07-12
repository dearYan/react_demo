import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import '../actions/index'

function userMessage(state = { users: {}, repos: {} }, action) {
     return state;
}

const rootReducer = combineReducers({
	userMessage : userMessage,
	routing : routerReducer
})

export default rootReducer