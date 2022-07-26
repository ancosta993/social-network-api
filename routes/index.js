const router = require('express').Router();

// import all the api routes from api folder
const apiRoutes = require('./api');

// mount all the api routes to the api endpoing in url
router.use('/api', apiRoutes);

module.exports = router;