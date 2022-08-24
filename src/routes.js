const router = require('express').Router();

const { getHomePage, getDataBooks, insertCategory, getCategories ,postBook } = require('./controllers/index');

router.get('/test', getHomePage);
router.get('/getAllBooks', getDataBooks);
router.post('/category', insertCategory);
router.get('/allcategories', getCategories); // this for options in add books form
router.post("/book",postBook)
module.exports = router;
