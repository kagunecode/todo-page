const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		app: "./src/pages/app.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: [
					"style-loader",
					{ loader: "css-loader", options: { importLoaders: 1 } },
					"postcss-loader",
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "svg-url-loader",
						options: {
							limit: 10000,
						},
					},
				],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					sources: {
						list: [
							"...",
							{
								tag: "a",
								attribute: "href",
								type: "src",
							},
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/views/index.html",
			chunks: ["index"],
		}),
		new HtmlWebpackPlugin({
			filename: "app.html",
			template: "src/views/app.html",
			chunks: ["app"],
		}),
	],
};
