var routes = require('./Company.Route');
const router = require('express').Router();

router.use('/hr',routes)
module.exports = router;