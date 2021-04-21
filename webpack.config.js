const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index',
        authoriz: './src/scripts/authoriz',
        roomDetails: './src/scripts/room-details',
        searchRoom: './src/scripts/search-room',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}



