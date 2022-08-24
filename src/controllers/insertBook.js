const { postBook } = require("../database/quires/books");

const inserBook = (req, res) => {
  const { book, img, selector } = req.body;
  postBook(book, img, selector).then(data => res.send(data.rows))
};
module.exports = inserBook;
