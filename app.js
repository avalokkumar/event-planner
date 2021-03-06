module.exports = function(){

  var express = require('express')
      , routes = require('./routes/index.js')()
      , user = require('./routes/user.js')()
      , router = require('router')
      , path = require('path')
      , bodyParser = require('body-parser')
      , morgan = require('morgan')
      , methodOverride = require('method-override')
      , app = express()
      , bodyParser = require('body-parser');
	  app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
	  app.use(morgan('dev'));                                         // log every request to the console
	  app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
	  app.use(bodyParser.json());                                     // parse application/json
	  app.use('/bower_components',  express.static(__dirname + '/bower_components'));
	  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
	  app.use(methodOverride());
      app.use(bodyParser.json()),
      app.use(bodyParser.urlencoded({
        extended: !0
      }));
      
  /*app.get('/', function(req, res){
	  res.sendFile('./public/index.html')
  })*/
  app.post('/register', function(req,res){
	  user.createUser(req, res);
  })
  app.post('/login', function(req,res){
	  user.validateCredentials(req, res);
  })
  //returns dummy data from data directory
  app.get('/dummydata', function(req, res){
	  user.sendDummyData(req, res);
  })
 //app.get('/', routes.index);
  /*app.get('/contactlist', routes.getContactList);*/
  return app;
}