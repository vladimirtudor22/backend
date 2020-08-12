// TratamenteController.js
// Import Tratamente model
Tratamente = require('./tratamenteModel');
// Handle index actions
exports.index = function (req, res) {
    Tratamente.get(function (err, tratamentes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tratamentes retrieved successfully",
            data: tratamentes
        });
    });
};
// Handle create Tratamente actions
exports.new = function (req, res) {
    var tratamente = new Tratamente();
    tratamente.client_id = req.body.client_id;
    tratamente.doctor_id = req.body.doctor_id;
    tratamente.doctor_name = req.body.doctor_name;
    tratamente.numePastila = req.body.numePastila;
    tratamente.number = req.body.number;
    tratamente.date = req.body.date;
// save the Tratamente and check for errors
    tratamente.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New Tratamente created!',
            data: tratamente
        });
    });
};
// Handle view Tratamente info
exports.findClient = function (req, res) {
    Tratamente.find({client_id : req.body.client_id}, function (err, tratamente) {
        if (err)
            res.send(err);
        res.json({
            message: 'Tratamente details loading..',
            data: tratamente
        });
    });
};