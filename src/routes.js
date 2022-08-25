const router = require('express').Router();

const {
  getDataBooks, insertCategory, getCategories, postBook, deleteBook, putBook,
} = require('./controllers/index');

router.get('/AllBooks', getDataBooks);
router.post('/category', insertCategory);
router.get('/allCategories', getCategories); // this for options in add books form
router.post('/book', postBook);
router.put('/book/:id', putBook);
router.delete('/book/:id', deleteBook);
module.exports = router;
