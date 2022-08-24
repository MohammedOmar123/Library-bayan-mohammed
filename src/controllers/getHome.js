const { join } = require('path');
const test = require('../database/quires/gethome');

const getHomePage = (req, res) => {
  test().then(data => res.json(data));
};

module.exports = getHomePage;
