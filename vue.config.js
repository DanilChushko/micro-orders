const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
		port: 4402,
	},
	configureWebpack: {
		output: {
			filename: 'main.[hash].js',
			libraryTarget: 'amd',
		},
		plugins: [
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1,
			}),
			new WebpackAssetsManifest({
				output: 'config.json',
				customize(entry) {
					if (!/\.js$/i.test(entry.key)) {
						return false;
					}
					return {
						key: 'src',
						value: `${entry.value}`,
					};
				},
			}),
		],
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.externals(['vue', 'single-spa-vue']);
		}
	},
};
