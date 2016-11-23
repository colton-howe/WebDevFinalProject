var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

//Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//Set up view folder
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

//Set up database
mongoose.connect('localhost:27017/university');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: {type: String, 
       validate: [/([0-9]+)/, 'Any number of digits'],
       unique: true,
       index: true},
	username: {type: String.
            unique: true},
	password: {type: String,
             index: true},
  firstName: String,
  lastName: String,
}, {collection: 'users'});
var User = mongoose.model('user', userSchema);

app.get('/', function(request, response) {
  console.log("Test Access");
  User.find({id: 1}).then(function(results) {
    console.log(results.length > 0)
    if (results.length > 0) {
        console.log(results[0].username);
    } else {
        console.log("Error. Did not find match.");
    }
  });
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Setup Complete. Connect via http://127.0.0.1:' + app.get('port') + '/');
});