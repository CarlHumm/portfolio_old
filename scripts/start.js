import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function start() {
  const webpackConfigPath = path.resolve(__dirname, '../config/webpack.config.dev.js');
  const webpackConfigUrl = pathToFileURL(webpackConfigPath).href;

  const { default: webpackConfig } = await import(webpackConfigUrl);

  console.log('Webpack devServer config:', webpackConfig.devServer);

  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(webpackConfig.devServer, compiler);

  server.startCallback(() => {
    console.log('Dev server running on http://localhost:3000');
  });
}

start().catch(err => {
  console.error(err);
  process.exit(1);
});
