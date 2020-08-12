// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
      type: String,
      required:true,
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    doctor: {
        type:Boolean,
        required:false,
        default: 0
    },
    location: {
        type: String,
        required:false,
    },
    speciality: {
        type:String,
        required:false
    },
    likes: {
        type:Number,
        required:false
    },
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}