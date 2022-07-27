const {Schema, model, Types} = require('mongoose');

const thoughtSchema = new Schema(
   {

      thoughtText:{
         type: String,
         required: true
      },
      createdAt: {
         type: Date,
         default: Date.now
      },
      username: {
         type: Schema.Types.ObjectId,
         ref:"User"
      },
      reaction:[]
   }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;