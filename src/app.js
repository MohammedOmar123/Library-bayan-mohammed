const { join } = require('path');

const express = require('express');
const compression = require('compression');

const router = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});
module.exports = app;
