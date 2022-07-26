const mongoose = require('mongoose');
const express = require('express');

const app = express();
PORT = process.env.PORT || 3001;

// express middlewears
app.use(express.json()); // to parse json data
app.use(express.urlencoded({extended: true}));

// turn on all the routes
app.use(require('./routes'));

// establish mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api', {
   useNewUrlparser: true,
   useUnifiedTopology:true
});

// log mongo queries
mongoose.set('debug', true);

// start the server
app.listen(PORT, () => {
   console.log(`Connected to ${PORT}`)
})