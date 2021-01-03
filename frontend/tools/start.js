import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import commonConfig from '../config/common';
import webpackConfig from '../config/webpack';


const config = commonConfig.devServer;

const server = new WebpackDevServer(webpack(webpackConfig), config.options);

server.listen(config.port, config.host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', config.port);

  ['SIGINT', 'SIGTERM'].forEach(sig => {
    process.on(sig, () => {
      server.close();
      process.exit();
    });
  });
});
