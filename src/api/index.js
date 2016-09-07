var express = require('express');
var Subject = require('../models/model');
var router = express.Router();

router.get('/', function(req, res, next) {

	console.log("Detta är api routern");
	res.send("Detta är api routern");

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

		res.json(deleted);

	});
});

router.post('/post', function(req, res, next) {

	var name = req.body.name;
	var prio = parseInt(req.body.prio);
	var status = parseInt(req.body.status);
	var links = [req.body.links];
	var notes = req.body.notes;

	Subject.create({

		name: name,
		prio: prio,
		status: status,
		links: links,
		notes: notes

	}).then(function(posted) {

    res.json(posted);
		res.end();

  });
});

router.put('/update', function(req, res, next) {

	console.log(req.body);

  var id = req.body._id;
  var obj = req.body;

	/*
	var testId = "57ceb48a966f73a1200f9780";
	var testObj = {
		name: "ReactJS",
		status: 3,
		prio: 1
	}
	*/

	Subject.findByIdAndUpdate(id, obj, function (err, updated) {

  		if (err) return handleError(err);

      res.json(updated);

	});
});

module.exports = router;
