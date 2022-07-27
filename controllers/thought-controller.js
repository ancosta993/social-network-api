const {User, Thought} = require('../models');

const thoughtController = {

   // create thought and add to the thoughts field in the user. Take the user id from the params.
   addThough({params, body}, res){
      Thought.create(body)
         .then(({_id}) => {
            return User.findOneAndUpdate(
               {_id:params.userId},
               { $push: {thoughts: _id}},
               {new:true}
            )
         })
         .then(dbUserData => {
            if(!dbUserData){
               res.status(400).json({message: "No User with this id was found"});
               return;
            }
            res.json(dbUserData);
         })
         .catch(err => {
            console.log(err);
            res.status(500).json(err);
         })
   },
   // Get all thoughts
   showAllThoughts(req, res){
      Thought.find({})
      .then(dbThoughtData => {
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
   }
};