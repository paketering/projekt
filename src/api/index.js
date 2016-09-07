var express = require('express');
var Subject = require('../models/model');
var router = express.Router();

router.get('/', function(req, res, next) {

	console.log("Detta är api routern");
	res.json({name: "Andreas"});

});

//Get request på api/subject
router.get('/subject', function(req, res, next) {

	Subject.find( ).then(function(allData) {

		res.json(allData);

	});

});



//get request på api/subject/id
router.get('/subject/:id', function(req, res, next) {

	Subject.find({_id:req.params.id}).then(function(idData) {

		res.json(idData);

	});

});

//delete på api/delete/id
router.delete('/delete/:id', function(req, res, next) {

	Subject.remove({_id:req.params.id}).then(function(deleted) {

		res.end();

	});

});

router.post('/post', function(req, res, next) {

	Subject.create({

		name: req.body.name
		//prio: parseInt(req.body.prio),
		//status: parseInt(req.body.status),
    //notes: req.body.notes

	});

  res.redirect('/');

});

/*

router.put('/edit', function(req, res, next) {

	console.log(req.body);

	var id = req.body.subjectId;
	var name = req.body.name;
	var prio = parseInt(req.body.prio);
  var status = parseInt(req.body.status);
  var notes = req.body.notes;

	Subject.findByIdAndUpdate(id, { $set:

		{
			name: name,
			prio: prio,
      status: status,
      notes: notes
		}

	}, function (err, tank) {

  		if (err) return handleError(err);

  		res.redirect('/edit');

	});

});

router.post('/addlink', function(req, res, next) {

	Subject.update({_id:req.body.subjectId}, {$push: {links: req.body.link}}).then(function(update) {

		res.end();

	});

});

*/

module.exports = router;
