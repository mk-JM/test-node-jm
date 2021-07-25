var express = require('express');
var router = express.Router();
var Attendee = require('../mongodb/models/attendee');

/* GET home page. */
router.get('/', function (req, res, next) {
  Attendee.find(function(err, attendee) {  
    res.send(attendee);  
  });
});

router.post('/', async function (req, res, next) {
  if (typeof req.body !== 'undefined') {
    const person = new Attendee({name: req.body.name, lastName: req.body.lastName});  
    person.save(); 
    res.send('Salvado exitoso'); 
    res.end();  
  }
});


module.exports = router;
