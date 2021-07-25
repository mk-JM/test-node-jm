const mongoose = require('mongoose');
Schema = mongoose.Schema;  
  
const attendeeSchema = new Schema({  
    name: {
        type: String,
        required: [true, 'Nombre es obligatorio']
    },
    lastName: {
        type: String,
        required: [true, 'Apellido es obligatorio']
    },
    phone: {
        type: Number,
        validate: {
            validator: (v) => {
                return _.isNumber(v);
            },
            message: () => 'Por favor ingrese un número de teléfono válido'
        },
        required: [true, 'Teléfono es obligatorio']
    },
    DNI: {
        type: Number,
        min: 9,
        max: 9,
        validate: {
            validator: (v) => {
                return v.length === 9;
            },
            message: () => 'Por favor ingrese un número de teléfono válido'
        },
        required: [true, 'DNI es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'Email es obligatorio']
    },
    birthDate: {
        type: Date,
        required: [true, 'Fecha de nacimiento es obligatoria']
    },
    regDate: { type: Date, default: Date.now }
});  
  
//Export the schema  
module.exports = mongoose.model('Attendee', attendeeSchema); 