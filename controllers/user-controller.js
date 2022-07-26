const {User} = require('../models');

// create User controller

const userController = {
   // get all users
   getAllUser(req, res) {
      User.find({})
         .then(dbUserData => res.json(dbUserData))
         .catch(err => {
            console.log(err);
            res.status(400).json(err);
         })
   },

   // create an user
   async createUser({body}, res) {
      User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      })
   }
};

module.exports = userController;