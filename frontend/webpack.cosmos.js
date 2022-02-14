/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin =
  require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;
const resolve = require('path').resolve;
const EvironmentPlugin = require('webpack').EnvironmentPlugin;

const plugins = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, 'src', 'index.html')
  }),
  new MiniCssExtractPlugin({
    filename: '[id].css'
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
    eslint: {
      files: './src/**/*'
    }
  }),
  new EvironmentPlugin({
    NODE_ENV: 'cosmos'
  })
];

const config = {
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    static: {
      publicPath: '/'
    },
    client: {
      overlay: {
        errors: true,
        warnings: false
      },
      progress: true
    },
    port: 9000,
    historyApiFallback: true,
    hot: true
  },
  plugins,
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.tsx'),
  optimization: {
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.jsx', '.tsx', '.json', '.css'],
    plugins: [new TsconfigPathsPlugin()]
  }
};

module.exports = config;
