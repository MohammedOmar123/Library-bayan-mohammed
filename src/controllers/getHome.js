const { join } = require('path');
const test = require('../database/quires/gethome')
const getHomePage = (req, res) => {
  console.log(req.url);
  // res.sendFile(join(__dirname, '..', '..', 'public', 'index.js'));
 test().then(data => res.json(data))
};

module.exports = getHomePage;
