import 'babel-polyfill'

const React = require('react');
const ReactDOM = require('react-dom');

const reactRouter = require('react-router');
const reactRouterRedux = require('react-router-redux');
const Root = require('./common/Root');
const configureStore = require('./store/configureStore')

const browserHistory = reactRouter.browserHistory;
const syncHistoryWithStore = reactRouterRedux.syncHistoryWithStore;

const store = configureStore.configureStore.configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root.Root store={ store } history={ history } />,
    document.getElementById('root')
)
