const {User} = require('../models');

const friendController = {
   // add friend to an user
   addFriend({params}, res){
      User.findOneAndUpdate(
         {_id: params.userId},
         { $addToSet: {friends: params.friendId}},
         {new: true, runValidator: true}
      )
      .then(dbUserData => {
         if(!dbUserData){
            res.status(400).json({message: "One or more user id is invalid" });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
   },
   // delete friend fromt an user
   deleteFriend({params}, res){
      User.findOneAndUpdate(
         {_id: params.userId},
         { $pull: {friends: params.friendId}},
         {new: true, runValidator: true}
      )
      .then(dbUserData => {
         if(!dbUserData){
            res.status(400).json({message: "One or more user id is invalid" });
            return;
         }
         res.json(dbUserData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
   }
}

module.exports = friendController;