//Load library
var express = require('express');
var reload = require('reload');
var app = express();
//var io = require('socket.io')();

//Load data
var dataFile = require('./data/data.json');

var privacyStatement = require('./data/privacy.json');
var termOfUse = require('./data/termofuse.json');

/*i18n stuff*/
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var session = require('express-session')
app.use(session({
	  secret: 'secret',
	  saveUninitialized: true,
	  resave: true
	}));

//<--- use here. Specify translations files path.
var i18n=require("i18n-express");
var path = require('path');
app.use(i18n({
	translationsPath: path.join(__dirname, 'data/i18n'),
	  siteLangs: ["cn","en"],
	  textsVarName: 'translation'
	}));

/* end of i18n*/

/*Set server to run on tcp port 3000, app is like a big hashmap
  Start your server at: localhost:3000
*/
app.set('port', process.env.PORT || 3000 );

//Assign the var to a key-'appData', app.get('appData'), kinda like global vars
app.set('appData', dataFile);
app.set('termOfUse',termOfUse);
app.set('privacy',privacyStatement);

//Local variables shared by all the view pages
app.locals.siteTitle = 'Oak Leafage Education Consulting';

// This is a hack, please fix it
app.locals.allServices = dataFile.services.cn;

/*
 *  MVC, model, view, controller.
 * */
//Set up view and view engine
app.set('view engine', 'ejs'); // view engine can be mastache/handlebarjs/ejs html template
app.set('views', 'app/views'); // web rending, .jsp

//Set up controller
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/services'));
app.use(require('./routes/termofuse'));
app.use(require('./routes/privacy'));
app.use(require('./routes/cases'));

/* Take out these advanced features
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
*/

// Set up server event, please note the callback function
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// Set up chat server, comment out this advanced feature
/*
io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});
*/

// Enable server hotplug feature, save and take in effect
reload(server, app);