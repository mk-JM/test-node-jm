var express = require('express');
var router = express.Router();
var Attendee = require('../mongodb/models/attendee');
const { isEmpty } = require('lodash');

/* GET home page. */
router.get('/list', function (req, res, next) {
  Attendee.find(function(err, attendee) {  
    res.send(attendee);  
  });
});

router.post('/save', async function (req, res, next) {
  if (typeof req.body !== 'undefined') {
    if (isEmpty(req.body)) {
      // 
    }
    const person = new Attendee({name: req.body.name, lastName: req.body.lastName});  
    person.save(); 
    res.send('Salvado exitoso'); 
    res.end();  
  }
  next(req);
});


module.exports = router;
