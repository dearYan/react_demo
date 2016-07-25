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
require('../../css/reset.css');
require('../../css/main.css');

//引入page
const Index = require('../page/layout');
const Article = require('../page/article').Article;
const Community = require('../page/community').Community;
const Family = require('../page/family').Family;
const Works = require('../page/works').Works;
const Home = Index.Home;

class Root extends Component {
    render() {
        const { store, history } = this.props
        return (
            <Provider store = { store }>
                <Router history = { history }>
                    <Route path = "/" component = { Home }>
                        <Route path = "/article" component = { Article }/>
                        <Route path = "/community" component = { Community }/>
                        <Route path = "/works" component = { Works }/>
                        <Route path = "/family" component = { Family }/>
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
