// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to crafted with love!',
    });
});
// Import contact controller
var contactController = require('./contactController');
var reservationController = require('./reservationController');
var tratamenteController = require('./tratamenteController');
// Contact routes
router.route('/contacts/post')
    .post(contactController.new);
router.route('/contacts/get')
    .post(contactController.index);
router.route('/contacts/login')
    .post(contactController.findLogin);
router.route('/profileEdit')
    .post(contactController.profileEdit);
router.route('/doctors')
    .post(contactController.findDoctors);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// reservation routes
router.route('/reservation/save')
    .post(reservationController.new);
router.route('/reservation/get/doctor')
    .post(reservationController.findDoctor);
router.route('/reservation/get/client')
    .post(reservationController.findClient);
router.route('/reservation/updateDoctor')
    .post(reservationController.changeStatus);
router.route('/reservation/get')
    .post(reservationController.index);
// tratamente routes
router.route('/tratamente/get')
    .post(tratamenteController.index);
router.route('/tratamente/findClient')
    .post(tratamenteController.findClient);
router.route('/tratamente/post')
    .post(tratamenteController.new);
// Export API routes
module.exports = router;