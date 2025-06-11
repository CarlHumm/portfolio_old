import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { fileURLToPath } from 'url';
import createDevServerConfig from './webpackDevServer.config.js';
import { getClientEnvironment } from './env.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = '/'
const devServerConfig = createDevServerConfig(publicPath);
const env = getClientEnvironment(publicPath);

export default {
  mode: 'development',
  entry: [
    'react-refresh/runtime',
    path.resolve(__dirname, '../src/js/index.js'),
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath,
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
          },
        ],
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: ['postcss-preset-env'] } },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: 'asset',
        generator: { filename: 'static/media/[name].[hash:8][ext]' },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'static/fonts/[name].[hash:8][ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: { 'react-native$': 'react-native-web' },
  },
  plugins: [
        new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
    }),
    new webpack.DefinePlugin(env.stringified),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.HTTPS': JSON.stringify(process.env.HTTPS || 'false'),
      'process.env.HOST': JSON.stringify(process.env.HOST || '0.0.0.0'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: devServerConfig,
  performance: { hints: false },
  optimization: {
    moduleIds: 'named',
    chunkIds: 'named',
  },
};
