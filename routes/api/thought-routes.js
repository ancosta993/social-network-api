const router = require('express').Router();
const {addThought, showAllThoughts, updateThought, deleteThought} = require('../../controllers/thought-controller');

router.route('/')
   .get(showAllThoughts);

router.route('/:userId')
   .post(addThought);

router.route('/:thoughtId')
   .put(updateThought);

router
   .route('/:thoughtId/user/:userId')
   .delete(deleteThought);
module.exports = router;