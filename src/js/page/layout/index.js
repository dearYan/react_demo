const React = require('react');
const Redux = require('react-redux');
const connect = Redux.connect;
const Component = React.Component;

// const Header = require("../../components/Header").Header;

class Home extends Component{

	render(){
		return (<div>
			     <Header />
			     <div className = "content_container">{ this.props.children }</div>
			</div>)
	}
	
}

function mapStateToProps(state) {
	return {};
}

exports.Home = connect()(Home)

