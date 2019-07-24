const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const helmet = require('helmet');
const nocache = require('nocache');
const handlebars = require('express-handlebars');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config')();

const compiler = webpack(webpackConfig);

const routes = require('./routes');

const app = express();

app.engine(
  'html',
  handlebars({
    helpers: {
      toJson: object => JSON.stringify(object)
    }
  })
);
app.set('view engine', 'html');

app.use(responseTime());
app.use(helmet());
app.use(nocache());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Use webpack middleware for dev mode, in order to achieve hot reloading.
if (process.env.HOT) {
  app.use(
    webpackMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get('/ping', (req, res) =>
  res.json({
    version: process.env.npm_package_version,
    name: process.env.npm_package_name
  })
);

app.use(routes());

module.exports = app;
