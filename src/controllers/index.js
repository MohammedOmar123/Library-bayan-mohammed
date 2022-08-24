const getHomePage = require('./getHome');
const { getDataBooks } = require('./getBooks');
const insertCategory = require('./category');
const getCategories = require('./getCategories');
const postBook = require("./insertBook")
module.exports = { getHomePage, getDataBooks, insertCategory, getCategories ,postBook};
