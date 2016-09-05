const React = require('react');
const Redux = require('react-redux');
const connect = Redux.connect;
const Component = React.Component;

const DatePicker = require('../../widget/date-picker');
const RangePicker = DatePicker.RangePicker;
// const Antd = require('antd');
// const DatePicker = Antd.DatePicker;
// const RangePicker = DatePicker.RangePicker;
require('antd/dist/antd.css');

// const Loading = require('../../components/Loading').Loading;
// const Header = require("../../components/Header").Header;

class Home extends Component{

	render(){
		// return (<div>
		// 	     <Header />
		// 	     <div className = "content_container">{ this.props.children }</div>
		// 	</div>)

        // return (<Loading visible = { true }/>)
        const disabledDate = function (current) {
			 return current && current.getTime() > Date.now();
		};

		function newArray(start, end) {
			const result = [];
			for (let i = start; i < end; i++) {
			    result.push(i);
			}
			return result;
		}

		const showTime = {
			format : "HH:mm",
			hideDisabledOptions : true,
			disabledMinutes : function(){
				return newArray(0, 60).filter(value => value % 5 !== 0);
			}
		};

        return (<RangePicker 
        	         showTime = { showTime }
        	         disabledDate = { disabledDate }
        	         format="yyyy/MM/dd HH:mm"/>);
	}
	
}

function mapStateToProps(state) {
	return {};
}

exports.Home = connect()(Home)

