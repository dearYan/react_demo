const React = require('react');
require('../../css/loading.css');

const Loading = React.createClass({

	getDefaultProps(){
		return {
			visible : false
		}
	},

	render(){
		const { visible } = this.props;

		return (<div className = { `${visible? "" : "disabled"} loading_container` }>
			    <div className = "loading_position">
			         <span className = "loading_items frist"></span>
			         <span className = "loading_items second"></span>
			         <span className = "loading_items thrid"></span>
			         <span className = "loading_items four"></span>
			         <span className = "loading_items five"></span>
			         <span className = "loading_items six"></span>
			         <span className = "loading_items seven"></span>
			         <span className = "loading_items eight"></span>
			         <span className = "loading_items nine"></span>
			         <span className = "loading_items ten"></span>
			    </div>
			</div>)
	}
});

exports.Loading = Loading;