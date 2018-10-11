const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // chunkFilename: '[name]-[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: {
        '@mapbox/vector-tile': '@mapbox/vector-tile',
        'debug': 'debug',
        'leaflet': 'leaflet',
        'leaflet-vector-tile-layer': 'leaflet-vector-tile-layer',
        'pbf': 'pbf',
        'prop-types': {
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            amd: 'prop-types',
            umd: 'prop-types',
        },
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
            umd: 'react',
        },
        'react-dom': 'react-dom',
        'react-leaflet': 'react-leaflet'
    }
};