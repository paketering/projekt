'use strict';
var express = require('express');
var app = express();
var path = require('path');
var parser = require('body-parser');
var PORT = process.env.PORT || 3000;
var mongoose = require('mongoose');
var api = require('./src/api');

app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.json());
app.use('/api', api);

require('./src/database');
require('./src/models/model');
require('./src/seed');

app.get('/', (req, res,next)=>{
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/item', (req, res,next)=>{
   res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT,(err)=>{
   if(err){
      console.log('Failed to connect');
   }
   else{
      console.log('Connected to server '+PORT);
   }
});
