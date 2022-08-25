const { postCategory } = require('../database/quires/categories');

const insertCategory = (req, res) => {
  postCategory(req.body.categoryName).then(res.json({ massage: 'Category added successfully' })).catch((err) => console.log(err));
};
module.exports = insertCategory;
