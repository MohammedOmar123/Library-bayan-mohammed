const { updateBook } = require('../database/quires/books');

const putBook = (req, res) => {
  const { id } = req.params;

  const { bookName, img, categoryName } = req.body;

  updateBook(id, bookName, img, categoryName).then(() => res.json({ massage: 'Book Updated successfully' })).catch((err) => console.log(err));
};

module.exports = putBook;
