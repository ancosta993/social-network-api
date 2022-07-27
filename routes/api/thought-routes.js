const router = require('express').Router();
const {addThought, showAllThoughts, updateThought} = require('../../controllers/thought-controller');

router.route('/')
   .get(showAllThoughts);

router.route('/:userId')
   .post(addThought);

router.route('/:thoughtId')
   .put(updateThought);


module.exports = router;