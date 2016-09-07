'use strict';
const mongoose = require('mongoose');

// Connect to Mongo database
mongoose.connect('mongodb://localhost/subject', function(err){
   if(err){
      console.log('Failed connecting to database');
   }
   else{
      console.log('Connected to database');
   }
});

// Close connection if server is shut down
process.on('SIGINT', function() {
  mongoose.connection.close( function() {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
