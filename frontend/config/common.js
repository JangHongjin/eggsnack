export default {
  domain: process.env.DOMAIN || 'hongjin-local.com',
  apiHost: process.env.API_HOST || 'http://hongjin-local.com:8000',
  publicPath: process.env.CDN_PATH || '/',
  frontHost: process.env.FRONT_HOST || 'http://hongjin-local.com:7071',
  devServer: {
    port: 7071,
    host: 'hongjin-local.com',
    options: {
      historyApiFallback: {
        disableDotRule: true,
      },
      proxy: {
        '/api': 'http://localhost:8000',
      },
    },
  },
};
