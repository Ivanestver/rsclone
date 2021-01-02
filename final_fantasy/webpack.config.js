const path = require('path');
module.exports = {
    mode: "development",
    entry: './main/src/main.js',
    output: {
        path: path.resolve(__dirname, './main'),
        filename: 'bundle.js'
    }
};