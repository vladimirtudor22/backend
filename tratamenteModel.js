// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var tratamenteSchema = mongoose.Schema({
    client_id: {
        type: String,
        required: true,
    },
    create_date: {
        type: Date,
        default: Date.now,
    },
    doctor_id: {
        type: String,
        required:true,
    },
    doctor_name: {
      type: String,
      required:true,
    },
    number: {
        type: String,
        required:true
    },
    date: {
        type: String,
        required:true
    },
    numePastila:{
        type: String,
        required:true
    }
});
// Export Contact model
var Tratamente = module.exports = mongoose.model('tratamente', tratamenteSchema);
module.exports.get = function (callback, limit) {
    Tratamente.find(callback).limit(limit);
};