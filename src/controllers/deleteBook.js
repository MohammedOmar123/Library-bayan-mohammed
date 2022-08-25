const { deleteBook } = require('../database/quires/books');

const deleteBookCon = (req, res) => {
  deleteBook(req.params.id).then(res.json({ massage: 'Book deleted successfully' })).catch((err) => console.log(err));
};
module.exports = deleteBookCon;
