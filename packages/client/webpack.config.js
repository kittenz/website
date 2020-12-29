const path = require("path");
const webpack = require("webpack");

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
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, "public/"),
		publicPath: "http://localhost:3000/dist/",
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
