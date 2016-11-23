var express = require('express');
var app = express();
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
	username: String,
	hasedPassword: {type: String,
              index: true},
  firstName: String,
  lastName: String,
}, {collection: 'users'});
var User = mongoose.model('student', studentSchema);

var userSchema = new Schema({
	username: {type: String, 
              unique: true,
              index: true},
	email: String,
	hashedPassword: String
}, {collection: 'users'});
var User = mongoose.model('user', userSchema);

//Gets for loading pages
app.get('/', function(request, response) {
  response.render('mainPage');
});

app.get('/contactPage', function(request, response) {
  response.render('contactPage');
});

app.get('/aboutPage', function(request, response) {
  response.render('aboutPage');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Setup Complete. Connect via http://127.0.0.1:' + app.get('port') + '/');
});