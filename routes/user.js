module.exports = function() {
  var mongojs = require("mongojs"),
  fs = require('fs');
  var db = mongojs("contactlist", [ "contactlist" ]);
  var functions = {};
 
  var isUserRegistered = function(username) {
      console.log("Received a GET request!");
      var username = req.params.username;
      console.log(username);
      console.log("isUserRegistered invoked!");
      //TODO: first find user by username and use the id
      db.contactlist.findOne({
        _id: mongojs.ObjectId(userId)
      }, function(err, user) {
    	  if(user != null){
        	  return true
          }
      });
      return false
   }
  
  functions.sendDummyData = function(req, res){
	  var dummyContent = fs.readFileSync('./data/data-locations.json')
	  var data = JSON.parse(dummyContent);
	  console.log(data);
	  console.log(data[0].name);
	  res.json(data);
  }
  
  functions.getUserDetails = function(username){
	  //Query the db and return the user which matches the given username
  }
  
  functions.validateCredentials = function(req, res){
	 if(isUserRegistered(req.param.username)){
		 //TODO: return success flag in response
	 }
	  
  }
  
  functions.createUser = function(req, res){
	  //TODO: Get the user details from req and insert the user in db
	  // and return the id back to client
  }
  
  return functions;
}