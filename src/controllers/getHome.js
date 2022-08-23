const { join } = require('path');

const getHomePage = (req, res) => {
  console.log(req.url);
  res.sendFile(join(__dirname, '..', '..', 'public', 'index.js'));
};

module.exports = getHomePage;
