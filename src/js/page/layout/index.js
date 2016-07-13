const React = require('react');
const Redux = require('react-redux');
const Ant = require('antd');

const connect = Redux.connect;
const Component = React.Component;

const Row = Ant.Row;

class Home extends Component{

	render(){

		return (<div>
			<Row className = "user_manager_layout_header"></Row>
		</div>)
	}
	
}

function mapStateToProps(state) {
	return {};
}

exports.Home = connect()(Home)

