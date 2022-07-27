const router = require('express').Router();
const {addThought, showAllThoughts, updateThought, deleteThought, showThoughtById, addReaction, deleteReaction} = require('../../controllers/thought-controller');


router.route('/')
   .get(showAllThoughts)
   .post(addThought);

// router.route('/:userId')
//    .post(addThought);

router.route('/:thoughtId')
   .get(showThoughtById)
   .put(updateThought);

router
   .route('/:thoughtId/user/:userId')
   .delete(deleteThought);

router
   .route('/:thoughtId/reactions')
   .post(addReaction);

router
   .route('/:thoughtId/reactions/:reactionId')
   .delete(deleteReaction);

module.exports = router;