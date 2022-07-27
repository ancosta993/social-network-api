const {User, Thought} = require('../models');

const thoughtController = {

   // create thought and add to the thoughts field in the user. Take the user id from the params.
   addThought({body}, res){
      Thought.create(body)
         .then(({_id}) => {
            return User.findOneAndUpdate(
               {_id:body.userId},
               { $push: {thoughts: _id}},
               {new: true}
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
   },

   //get one thought by id
   showThoughtById({params, body}, res){
      Thought.find(
         {_id: params.thoughtId}
      )
      .then(dbThoughtData => {
         if(!dbThoughtData){
            res.status(400).json({message: "No thought with this id was found"});
            return;
         }
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
   },

   updateThought({params, body}, res){
      Thought.findOneAndUpdate(
         {_id: params.thoughtId},
         body,
         {new: true}
      )
      .then(dbThoughtData => {
         if(!dbThoughtData){
            res.status(400).json({message: "No thought with this id was found"});
            return;
         }
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      })
   },

   deleteThought({params}, res){
      Thought.findOneAndDelete(
         {_id: params.thoughtId}
      )
      .then((dbThoughtData) => {
         if(!dbThoughtData){
            res.status(400).json({message:"No Thought with this id was found"});
            return;
         }
         return User.findOneAndUpdate(
            {_id: params.userId},
            { $pull: {thoughts: params.thoughtId}},
            {new:true}
         )
      })
      .then(dbThoughtData => {
         if(!dbThoughtData){
            res.status(400).json({message: "No thought with this id was found"});
            return;
         }
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      })
   },
   // reaction controllers
   addReaction({params, body}, res){
      Thought.findOneAndUpdate(
         {_id: params.thoughtId},
         { $push: {reactions: body} },
         {new: true, runValidator: true}
      )
      .then(dbThoughtData => {
         if(!dbThoughtData){
            return res.status(400).json({message: "No thought with this id was found!"});
         }
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      })
   },
   // remove reaction
   deleteReaction({params, body}, res){
      Thought.findOneAndUpdate(
         {_id: params.thoughtId},
         { $pull: {reactions: {reactionId: params.reactionId}} },
         {new: true, runValidator: true}
      )
      .then(dbThoughtData => {
         if(!dbThoughtData){
            return res.status(400).json({message: "No thought with this id was found!"});
         }
         res.json(dbThoughtData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      })
   }
   
};

module.exports = thoughtController;