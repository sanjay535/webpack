// Nodejs module for absolute path resolving
var path = require('path'); 
module.exports = {
    mode: 'development',
//  Entry point of webpack
entry: './src/app.js',         
output: {
    // Need to be resolved to absolute path
    path: path.resolve(__dirname, 'dist'),
    // bundled/compiled file name  
    filename: './bundle.js',
    // For webpack dev server to identify the full path.                
    publicPath: '/dist'        
    }
};