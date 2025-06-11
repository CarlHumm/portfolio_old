import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import errorOverlayMiddleware from 'react-dev-utils/errorOverlayMiddleware.js';
import evalSourceMapMiddleware from 'react-dev-utils/evalSourceMapMiddleware.js';
import noopServiceWorkerMiddleware from 'react-dev-utils/noopServiceWorkerMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const paths = {
  appPublic: path.resolve(__dirname, '../public'),
  proxySetup: path.resolve(__dirname, '../src/setupProxy.js'),
};

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

export default function createDevServerConfig(publicPath) {
  return {
    compress: true,
    client: {
      logging: 'none',
    },
    static: {
      directory: paths.appPublic,
      watch: true,
    },
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    host,
    allowedHosts: 'auto',
    proxy: [
      {
        context: ['/php'],
        target: 'http://localhost/portfolio_old/src',
        changeOrigin: true,
        pathRewrite: { '^/php': '/php' }, 
      },
    ],
    setupMiddlewares(middlewares, devServer) {
      if (fs.existsSync(paths.proxySetup)) {
        import(paths.proxySetup)
          .then(({ default: setupProxy }) => setupProxy(devServer.app))
          .catch(err => console.error('Failed to load proxy setup:', err));
      }

      middlewares.unshift(evalSourceMapMiddleware(devServer));
      middlewares.unshift(errorOverlayMiddleware());
      middlewares.unshift(noopServiceWorkerMiddleware(devServer.options.devMiddleware.publicPath));

      return middlewares;
    },
    devMiddleware: {
      publicPath,
    },
    server: protocol === 'https' ? { type: 'https' } : 'http',
  };
}
