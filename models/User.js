const {Schema, model} = require('mongoose'); // import Schema and model from mongoose

// make the user model

const userSchema = new Schema(
   {
      email:{
         type: String,
         required: true,
         trim: true,
         match:[/.+@.+\..+/, 'Please enter a valid e-mail address']
      },
      createdAt: {
         type: Date,
         default: Date.now,
      },
      thoughts:[
         {
            type: Schema.Types.ObjectId,
            ref:"Thought"
         }
      ]
   },
   {
      toJSON:{
         virtuals: true
      }
   }
);

// get username virtual. it will get this from user email
userSchema.virtual('username').get(function(){
   return this.email.split('@')[0];
});

// make the user model

const User = model('User', userSchema);

module.exports = User;
