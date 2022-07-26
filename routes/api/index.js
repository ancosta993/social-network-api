const router = require('express').Router();

// import all the api routes
const userRoutes = require('./user-routes');

// mount the api routes to the appropriate endpoint
router.use('/users', userRoutes);

module.exports = router;