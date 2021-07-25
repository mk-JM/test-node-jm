const mongoose = require('mongoose');
Schema = mongoose.Schema;  
  
const attendeeSchema = new Schema({  
    name: String,  
    lastName: String,
    phone: Number,
    DNI: { type: Number, min: 9, max: 9 },
    email: String,
    birthDate: Date,
    regDate: { type: Date, default: Date.now }
});  
  
//Export the schema  
module.exports = mongoose.model('Attendee', attendeeSchema); 