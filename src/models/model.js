'use strict';
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
   name: {type: String, unique: true},
   prio: {type: Number,'default':1},
   status: {type:Number,'default':1},
   links: [String],
   notes: String
});

const subjectModel = mongoose.model('Subject', subjectSchema);

module.exports = subjectModel;
