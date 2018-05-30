//Load library
var express = require('express');
var reload = require('reload');
var app = express();
const geoip = require('geoip-lite');
const requestIp = require('request-ip');
var http= require('http');
var io = require('socket.io')();
var path = require('path');

//var appDir = path.dirname(require.main.filename);

var myLogger = (req, res, next) => {
  let ip=requestIp.getClientIp(req)
  if (ip=='::1'){
    ip="207.97.227.239"; //One us IP
  }
  const geo = geoip.lookup(ip).country;
  
  //console.log(ip)
  app.set('i18n',geo);
  next()
}

app.use(myLogger);

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

// Specify translations files path.
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
app.locals.allServices = app.get('i18n') === 'CN' ? dataFile.services.cn : dataFile.services.en;
app.locals.SERVICES_NUM = 3; //this is the number of services to show in the index.ejs page.

//app.locals.appDir = appDir;

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
app.use(require('./routes/survey'));
app.use(require('./routes/contactus'));
app.use(require('./routes/news'));
app.use(require('./routes/aboutus'));
app.use(require('./routes/api'));
/* Take out these advanced features
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
*/

// Set up server event, please note the callback function

var server = app.listen(app.get('port'),
		(req, res) => {console.log('Listening on port ' + app.get('port'));}
		     );

// Set up chat server, comment out this advanced feature

io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});


// Enable server hotplug feature, save and take in effect
reload(server, app);