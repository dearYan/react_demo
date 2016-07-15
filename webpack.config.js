var path = require('path')

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
		        loaders: [ 'style!css' ],
		        exclude: /node_modules/,
		        include: __dirname
		     }
	    ]
	},
    resolve: {
    	alias: {
    		css : "./src/css",
    		img : "./src/imgs"
    	}
    }
}