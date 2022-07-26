const router = require('express').Router();
const {getAllUser, createUser} = require('../../controllers/user-controller');

//  GET route for all users
router
   .route('/')
   .get(getAllUser)
   .post(createUser);

module.exports = router;