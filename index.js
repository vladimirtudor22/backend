// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
const MONGO_USERNAME = 'raspop';
const MONGO_PASSWORD = 'metin2';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'medical';
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 80;
// Send message for default URL
app.get('/', (req, res) => res.redirect('https://www.dropbox.com/s/jkafewyhlxwkr6i/app-release.apk?dl=0&fbclid=IwAR3oWiUZf_utr1o_0q6rmhuRfnmNi5phmfkxDQA1IXsfuTeRoGXtqELL390'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running YourDoctor on port " + port);
});