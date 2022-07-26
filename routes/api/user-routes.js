const router = require('express').Router();

//  GET route for all users
router.get('/', (req, res) => {
   res.json('Hello');
});

module.exports = router;