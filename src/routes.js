const router = require('express').Router();

const getHomePage = require('./controllers/index');

router.get('/test', getHomePage);
// router.get('/getAllBooks',getDataBooks)

module.exports = router;
