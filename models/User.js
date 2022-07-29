const {Schema, model} = require('mongoose'); // import Schema and model from mongoose
const dateFormat = require('../utils/dateFormat');

// make the user model

const userSchema = new Schema(
   {
      username:{
         type:String,
         unique:true,
         required:true,
         trimmed: true
      },
      email:{
         type: String,
         required: true,
         trim: true,
         unique:true,
         match:[/.+@.+\..+/, 'Please enter a valid e-mail address']
      },
      createdAt: {
         type: Date,
         default: Date.now,
         get: (createdAtVal) => dateFormat(createdAtVal)
      },
      thoughts:[
         {
            type: Schema.Types.ObjectId,
            ref:"Thought"
         }
      ],
      friends: [
         {
            type: Schema.Types.ObjectId,
            ref: 'User'
         }
      ]
   },
   {
      toJSON:{
         virtuals: true,
         getters: true
      },
      id: false
   }
);


// thought count virtual.
userSchema.virtual('thoughtCount').get(function() {
   return this.thoughts.length;
});


// make the user model

const User = model('User', userSchema);

module.exports = User;
