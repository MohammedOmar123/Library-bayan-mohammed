const connection = require('../connection');

const getAllCategories = () => connection.query('select * from categories');

const postCategory = (name) => connection.query({
  text: 'INSERT INTO categories (cName) VALUES ($1);',
  values: [name],
});

module.exports = { getAllCategories, postCategory };
