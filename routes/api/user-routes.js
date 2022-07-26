const router = require('express').Router();
const {getAllUser, createUser, getUserById} = require('../../controllers/user-controller');

// User home route (GET all and POST create)
router
   .route('/')
   .get(getAllUser)
   .post(createUser);

// User by ID
router
   .route('/:id')
   .get(getUserById);
module.exports = router;