const router = require('express').Router();

const getHomePage = require('./controllers/index');

router.get('/', getHomePage);

module.exports = router;
