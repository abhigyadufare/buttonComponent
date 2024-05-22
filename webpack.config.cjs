const path = require('path');

module.exports = {
    mode: 'production',
    entry: './Button',
    output: {
        filename: 'Button.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Button',
        libraryTarget: 'umd',
        globalObject: 'this',
    }
}
