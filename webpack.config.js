var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: __dirname,
        filename: "lib/bundle.js"
	},
	module: {
	    loaders: [
		     {
		        test: /\.js$/,
		        loaders: [ 'babel-loader' ],
		        exclude: /node_modules/,
		        include: __dirname
		     },
		     {
		        test: /\.css$/,
		        loader: 'style!css',
		     }
	    ]
	},
    resolve: {
    	alias: {
    		css : "/src/css",
    		img : "/src/imgs",
    		js : "/src/js"
    	}
    }
}