// ReservationController.js
// Import Reservation model
Reservation = require('./reservationModel');
// Handle index actions
exports.index = function (req, res) {
    Reservation.get(function (err, reservations) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Reservations retrieved successfully",
            data: reservations
        });
    });
};
// Handle create Reservation actions
exports.new = function (req, res) {
    var reservation = new Reservation();
    reservation.client_id = req.body.client_id;
    reservation.location = req.body.location;
    reservation.doctor_id = req.body.doctor_id;
    reservation.doctor_name = req.body.doctor_name;
    reservation.programdate = req.body.programdate;
    reservation.programtime = req.body.programtime;
    reservation.client_name = req.body.client_name;
// save the Reservation and check for errors
    reservation.save(function (err) {
         if (err)
             res.json(err);
        res.json({
            message: 'New Reservation created!',
            data: reservation
        });
    });
};
// Handle view Reservation info
exports.findClient = function (req, res) {
    Reservation.find({client_id : req.body.client_id}, function (err, reservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Reservation details loading..',
            data: reservation
        });
    });
};
exports.findDoctor = function (req, res) {
    Reservation.find({doctor_id : req.body.doctor_id}, function (err, reservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Reservation details loading..',
            data: reservation
        });
    });
};
exports.changeStatus = function (req, res) {
    Reservation.findOneAndUpdate({_id : req.body._id},{status:req.body.status}, function (err, reservation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Reservation details loading..',
            data: reservation
        });
    });
};
// Handle update Reservation info
exports.update = function (req, res) {
    Reservation.findById(req.body.reservation_id, function (err, reservation) {
        if (err)
            res.send(err);
        Reservation.name = req.body.name ? req.body.name : Reservation.name;
        Reservation.location = req.body.location;
        Reservation.doctor_id = req.body.doctor_id;
        Reservation.doctor_name = req.body.doctor_name;
        Reservation.programdate = req.body.programdate;
        Reservation.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Reservation Info updated',
                data: reservation
            });
        });
    });
};