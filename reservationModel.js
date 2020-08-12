// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var reservationSchema = mongoose.Schema({
    client_id: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        required:true,
    },
    doctor_id: {
        type: String,
        required:true,
    },
    doctor_name: {
      type: String,
      required:true,
    },
    programdate: {
        type: String,
        required:true,
    },
    programtime: {
        type: String,
        required:true,
    },
    status: {
        type: String,
        required: false,
        default: '0',
    },
    client_name: {
        type: String,
        required: true
    }
});
// Export Contact model
var Reservation = module.exports = mongoose.model('reservation', reservationSchema);
module.exports.get = function (callback, limit) {
    Reservation.find(callback).limit(limit);
};