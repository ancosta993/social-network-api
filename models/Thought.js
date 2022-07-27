const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
   {
      thoughtText:{
         type: String,
         require: true
      },
      createdAt: {
         type: Date,
         default: Date.now
      }
   }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;