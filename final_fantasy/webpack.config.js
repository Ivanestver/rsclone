const path = require('path');
module.exports = {
    mode: "development",
    entry: './main/src/mainMenu.js',
    output: {
        path: path.resolve(__dirname, './main'),
        filename: 'bundle.js'
    }
};