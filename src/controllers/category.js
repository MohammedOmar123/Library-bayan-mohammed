const { postCategory } = require('../database/quires/categories');

const insertCategory = (req, res) => {
  postCategory(req.body.categoryName).then(res.json({ massage: 'Category added successfully' }));
};
module.exports = insertCategory;
