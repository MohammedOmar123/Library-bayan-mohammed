const router = require('express').Router();

const getHomePage = require('./controllers/index');

router.get('/test', getHomePage);

module.exports = router;
