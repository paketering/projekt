// File to be included in server.js. Everytime server starts file checks if the database contains these four objects. If not object is added to database. That way there is always four samples to work with during development.

let Subject = require('./models/model.js');

// Makes for examples of objects in database.
var react = new Subject();
react.name = 'ReactJS';
react.prio = 1;
react.status = 1;
react.links = ["https://facebook.github.io/react-native/docs/tutorial.html","http://stackoverflow.com/questions/tagged/reactjs"];
react.notes = "Franzen portland authentic, semiotics thundercats gochujang tofu. Try-hard actually fingerstache narwhal, helvetica cred readymade ennui freegan VHS 90's yuccie schlitz small batch. Locavore ae.";

var grunt = new Subject();
grunt.name = 'GruntJS';
grunt.prio = 3;
grunt.status = 2;
grunt.links = ["http://gruntjs.com/"];
grunt.notes = "Franzen portland authentic, semiotics thundercats gochujang tofu. Try-hard actually fingervore ae.";

var jquery = new Subject();
jquery.name = 'jQuery';
jquery.prio = 2;
jquery.status = 3;
jquery.links = ["http://jquery.com/","https://code.jquery.com/"];
jquery.notes = " Distillery cornhole plaid slow-carb whatever, actually umami taxidermy locavore. Mixtape ramps pabst post-ironic. Readymade keytar selvage lo-fi, organic photo booth distillery fanny pack thundercats banh dollar toast.";

var mongo = new Subject();
mongo.name = 'MongoDB';
mongo.prio = 2;
mongo.status = 1;
mongo.links = ["http://mongoosejs.com/docs/subdocs.html"];
mongo.notes = "Franzen portland authentic, semiotics thundercats gochujang tofu. Try-hard actually fingervore ae. sadfkjsldk s ldkfjsldkf.";

// Loops through all the objects. Check if they exist in database. If not, adds object to database.
let subjects = [react,grunt,jquery,mongo];
subjects.forEach((subject,index)=>{
   User.find({name:subject.name},(err, subjects)=>{
      if(!err && !subjects.length){
         Subject.create(subject);
         console.log(subject.name);
      }
   });
});
