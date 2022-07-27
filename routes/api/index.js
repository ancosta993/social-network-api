const router = require('express').Router();

// import all the api routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// mount the api routes to the appropriate endpoint
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;