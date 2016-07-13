const React = require('react');

const reactRedux = require('react-redux');
const routes = require('../routes');
const router = require('react-router');

const Provider = reactRedux.Provider;
const Router = router.Router;
const Route = router.Route;
const Component = React.Component;
const PropTypes = React.PropTypes;

//引入样式
// require('antd/dist/antd.css')
//引入page
const Index = require('../page/layout/index');
const Home = Index.Home;

class Root extends Component {
    render() {
        const { store, history } = this.props
        return (
            <Provider store = { store }>
                <Router history = { history }>
                    <Route path="/" component = { Home }>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
   store: PropTypes.object.isRequired,
   history: PropTypes.object.isRequired
}

exports.Root = Root;
