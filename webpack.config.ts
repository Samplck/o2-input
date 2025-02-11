import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin()
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: [ path.resolve(__dirname, './src'), 'node_modules']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { runtime: 'automatic' }],
                ['@babel/preset-typescript', { targets: 'defaults'}]
              ]
            }
          }
        },
        {
          test: /\.(css|scss)$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|svg)$/i,
          type: 'asset/resource'
        }
      ]
    }
  };
};

export default config;