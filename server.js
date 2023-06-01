const next = require('next');
const https = require('https');

const config = {
  port: process.env.HTTPS_PORT,
  cert: process.env.TLS_CERT,
  key: process.env.TLS_KEY,
};

const nextApp = next({ dev: false, dir: __dirname });

nextApp.prepare().then(() => {
  https
    .createServer(
      {
        rejectUnauthorized: true,
        cert: config.cert,
        key: config.key,
      },
      nextApp.getRequestHandler()
    )
    .listen(config.port);
});