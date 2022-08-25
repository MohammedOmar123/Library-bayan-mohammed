const { getDataBooks } = require('./getBooks');
const insertCategory = require('./category');
const getCategories = require('./getCategories');
const postBook = require('./insertBook');
const deleteBook = require('./deleteBook');
const putBook = require('./putBook');

module.exports = {
  getDataBooks, insertCategory, getCategories, postBook, deleteBook, putBook,
};
