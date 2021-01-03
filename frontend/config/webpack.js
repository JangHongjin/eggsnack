import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import commonConfig from './common';
import paths from './paths';


const mode = (
  process.argv.includes('--prod')
  ? 'prod'
  : process.argv.includes('--dev')
    ? 'dev'
    : process.argv.includes('--stage') ? 'stage' : 'local'
);

const env = process.env.NODE_ENV || 'development';
const isDebug = env === 'development';
const publicPath = commonConfig.publicPath;
const envVars = {
  NODE_ENV: env,
  MODE: mode,
  PUBLIC_PATH: publicPath,
  DOMAIN: commonConfig.domain,
  COLLECTOR_HOST: commonConfig.collectorHost,
  FRONT_HOST: commonConfig.frontHost,
  INSIGHT_FRONT_HOST: commonConfig.insightFrontHost,
  DUMPER_HOST: commonConfig.dumperHost,
  RAVEN_DSN: commonConfig.ravenDsn,
  API_HOST: commonConfig.apiHost,
};

const config = {
  mode: env,
  bail: true,
  context: paths.rootDir,
  entry: [
    '@babel/polyfill',
    './src/index.jsx',
  ],
  output: {
    publicPath,
    path: paths.buildDir,
    pathinfo: true,
    filename: 'static/js/bundle.[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          isDebug ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
          'css-loader',
        ],
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|svg|eot|ijmap|svg|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: (
            isDebug
            ? 'static/media/[name].[hash:9].[ext]'
            : 'static/media/[hash:9].[ext]'
          ),
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: paths.publicDir
      },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.indexHtml,
      templateParameters: envVars,
      minify: isDebug ? null : {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/bundle.[hash:8].css',
    }),
    new webpack.DefinePlugin(Object.keys(envVars).reduce((vars, key) => {
      vars[`process.env.${key}`] = JSON.stringify(envVars[key]);
      return vars;
    }, {})),

    ...(isDebug ? [] : [
      new CompressionPlugin({
        test: /\.(js|css)$/,
        asset: '[path]',
        cache: true,
      }),
    ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: true,
    colors: true,
    hash: true,
    modules: true,
    reasons: isDebug,
    timings: true,
    version: true,
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

export default config;
