const router = require('express').Router();
const {getAllUser, createUser, getUserById, updateUser, deleteUser} = require('../../controllers/user-controller');
const {addFriend, deleteFriend} = require('../../controllers/friend-controller');

// User home route (GET all and POST create)
router
   .route('/')
   .get(getAllUser)
   .post(createUser);

// User by ID
router
   .route('/:id')
   .get(getUserById)
   .put(updateUser)
   .delete(deleteUser)

// add friend to user
router
   .route('/:userId/friend/:friendId')
   .post(addFriend)
   .delete(deleteFriend)
module.exports = router;