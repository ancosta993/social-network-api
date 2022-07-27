const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema(
   {
      reactionId:{
         type: Schema.Types.ObjectId,
         default: () => new Types.ObjectId()
      },
      reactionBody:{
         type:String,
         required: true,
         maxlength:280
      },
      username:{
         type: String,
         required: true
      },
      createdAt:{
         type: Data,
         default: Date.now,
      }
   }
)

const thoughtSchema = new Schema(
   {

      thoughtText:{
         type: String,
         required: true,
         minlength: 1,
         maxlength: 280
      },
      createdAt: {
         type: Date,
         default: Date.now
      },
      username: {
         type: String,
         required: 'Thought Owner is required.'
      },
      reactions:[reactionSchema]
   },
   {
      toJSON:{
         virtuals:true
      },
      id:false
   }
);

// reaction count virual
thoughtSchema.virtual('reactionCount').get(function(){
   this.reactions.length;
})


const Thought = model('Thought', thoughtSchema);



module.exports = Thought;