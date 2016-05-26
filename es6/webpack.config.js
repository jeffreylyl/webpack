var webpack = require("webpack");

module.exports = {
    entry: ["./main.jsx"],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
   
}
