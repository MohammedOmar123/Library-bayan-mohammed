const { postBook } = require('../database/quires/books');

const insertBook = (req, res) => {
  const { book, img, selector } = req.body;
  postBook(book, img, selector).then(() => res.json({ massage: 'Book added successfully' }));
};
module.exports = insertBook;
