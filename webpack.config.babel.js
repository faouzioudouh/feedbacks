import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// HtmlWebPackPlugin automaticlly inject our main.js and minifies the file before output it to dist/index.html.
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const vendor = ['react', 'react-dom', 'react-redux'];

export default {
    name: 'client',
    target: 'web',

    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },

    entry: {
      bundle: './src/index.js',
      vendor,
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract(
                  {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
            },
            {
                test: /\.(svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        new ExtractTextPlugin('styles.css'),
    ]
};