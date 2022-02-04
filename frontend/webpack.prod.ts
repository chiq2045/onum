import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const plugins = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: '[id].[contenthash].css'
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
    eslint: {
      files: './src/**/*'
    }
  })
];

const config: Configuration = merge(common, {
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  plugins
});

export default common;
