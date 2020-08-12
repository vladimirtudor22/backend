// contactController.js
// Import contact model
Contact = require('./contactModel');
const crypto = require('crypto');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
exports.findLogin = function (req, res) {
    Contact.findOne({email: req.body.email, password: req.body.password}, function (err, data) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Succesfully logged",
            data: data
        });
    })
};
exports.findDoctors = function (req, res) {
    Contact.find({doctor: 1}, function (err, data) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "doctor get succes",
            data: data
        });
    })
};
exports.profileEdit = function (req, res) {
    let id = req.body.id;
    Contact.findByIdAndUpdate(id,{name:req.body.name ,email:req.body.email ,phone:req.body.phone}, function (err, data) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "doctor get succes",
            data: data
        });
    })
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.password = req.body.password;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.doctor = req.body.doctor;
    contact.location = req.body.location;
    contact.speciality = req.body.speciality;
    contact.status = req.body.status;
// save the contact and check for errors
    contact.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};