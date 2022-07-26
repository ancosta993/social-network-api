const {User} = require('../models');

// create User controller

const userController = {
   // get all users
   getAllUser(req, res) {
      User.find({})
         .then(dbUserData => res.json(dbUserData))
         .catch(err => {
            console.log(err);
            res.status(500).json(err);
         })
   },

   // get user by id
   getUserById({params}, res) {
      User.findById(
         {_id: params.id},
      )
      .then(dbUserData => {
         if(!dbUserData) {
            res.status(404).json({ message: "No User with this id was found" });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
   },

   // create an user
   createUser({body}, res) {
      User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      })
   }
};

module.exports = userController;