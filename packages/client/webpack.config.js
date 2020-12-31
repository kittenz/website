const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ "*", ".tsx", ".ts", ".js" ]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "./public"
	},
	optimization: {
		minimize: true,
		minimizer: [
			new HtmlMinimizerPlugin()
		]
	},
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, "./public"),
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: "./public/*.html", to: "./dist" }
			]
		})
	]
}
