const { join } = require('path');

const express = require('express');
const compression = require('compression');

const router = require('./routes');
const { clientErrors, serverErrors } = require('./controllers/error');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

app.use(clientErrors);
app.use(serverErrors);

module.exports = app;
