const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
	entry: {
		app: './src/main.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: 'dist/',
		publicPath: '/dist/'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'src': resolve('src'),
			'css': resolve('./src/assets/css')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html',
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/'
	}
};