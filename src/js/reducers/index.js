import { combineReducers } from 'redux'
import '../actions/index'

function userMessage(state = { users: {}, repos: {} }, action) {
     return state;
}

const rootReducer = combineReducers({userMessage})

export default rootReducer