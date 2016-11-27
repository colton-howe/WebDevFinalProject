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

app.use(session({secret: 'test'}));

var Schema = mongoose.Schema;

var userSchema = new Schema({
	id: {type: String, 
       validate: [/([0-9]+)/, 'Any number of digits'],
       unique: true,
       index: true},
	username: {type: String,
            unique: true},
	password: {type: String,
             index: true},
}, {collection: 'users'});
var User = mongoose.model('user', userSchema);

//Utility functions
function checkLoggedIn(request, response, pageToLoad) {	
	if(request.session != undefined) {
		if(request.session.username){
			var msg = 'Welcome, ' + request.session.username;
			response.render(pageToLoad, {action: '/processLogout', message: 'Logout', username: msg});
		} else {
			response.render(pageToLoad, {action: '/processLogin', message: 'Login', username: ''});
		}
	} else {
		response.render(pageToLoad, {action: '/processLogin', message: 'Login', username: ''});
	}
}

//Gets for loading pages
app.get('/', function(request, response) {
	checkLoggedIn(request, response, 'mainPage');	
});

app.get('/contactPage', function(request, response) {
	checkLoggedIn(request, response, 'contactPage');	
});

app.get('/aboutPage', function(request, response) {
	checkLoggedIn(request, response, 'aboutPage');	
});

app.get('/registrationPage', function(request, response) {
	response.render('registrationPage');
});

app.get('/eventsPage', function(request, response) {
	checkLoggedIn(request, response, 'eventsPage');	
});

//Posts to handle buttons and form submission
app.post('/processLogin', function(request, response){
	User.find({username: request.body.uname, password: request.body.psw}).then(function(results) {
    if (results.length > 0) {
			request.session.username = request.body.uname;
			checkLoggedIn(request, response, 'mainPage');	
    } else {
				response.render('mainPage', {action: '/processLogin', message: 'Login', username: '', error: 'Invalid Login Credentials'});
    }
  });
});

app.post('/processLogout', function(request, response) {
	request.session.destroy();
	checkLoggedIn(request, response, 'mainPage');
});

app.post('/makeAccount', function(request, response){
	var userCount = User.collection.count();
	var newUser = new User({id: userCount+1, username: request.body.uname, password: request.body.psw});
	newUser.save(function(error) {
	    if (error) {
				response.render('registrationPage', {error: "Username already exists in system. Please pick a different username."});
	    } else {
				response.render('registrationPage', {error: "Account created! Click cancel to go back to the main page and login."});
	    }
	});
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Setup Complete. Connect via http://127.0.0.1:' + app.get('port') + '/');
});	