const path = require('path');

const clientErrors = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '404.html'));
};

const serverErrors = (err, req, res, next) => {
  res.status(505).sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '505.html'));
};

module.exports = { clientErrors, serverErrors };
