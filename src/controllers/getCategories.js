const { getAllCategories } = require('../database/quires/categories');

const getCategories = (req, res) => {
  getAllCategories().then((data) => data.rows).then((data) => res.send(data));
};
module.exports = getCategories;
