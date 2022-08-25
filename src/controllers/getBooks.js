const { getAllBooks } = require('../database/quires/books');

const getDataBooks = (req, res) => {
  getAllBooks()
    .then((data) => {
      res.json(data.rows);
    }).catch((err) => console.log(err));
};
module.exports = { getDataBooks };
