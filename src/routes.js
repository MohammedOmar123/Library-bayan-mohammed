const router = require('express').Router();

const {getHomePage , getDataBooks } = require('./controllers/index');

router.get('/test', getHomePage);
router.get('/getAllBooks',getDataBooks)
module.exports = router;
