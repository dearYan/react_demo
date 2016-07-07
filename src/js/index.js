import 'babel-polyfill'

const React = require('react');
const ReactDOM = require('react-dom');

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './common/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)
