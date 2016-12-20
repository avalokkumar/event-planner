module.exports = function() {
  var mongojs = require("mongojs"),
  fs = require('fs');
  var db = mongojs("contactlist", [ "contactlist" ]);
  var functions = {};
  var loginFailedCount = 0;
  var db = mongojs("eventplanner", [ "eventplanner" ]);
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
	  //TODO:Query the db and return the user which matches the given username
  }
  
  functions.validateCredentials = function(req, res){
	  var cred = req.body;
	  console.log(cred)
	  var username = cred.username;
	  var pwd = cred.pwd;
	  
	  if(username === "clay" && pwd  === "abc" ){
		  loginFailedCount = 0;
		  var loginResponse = {
				  userId: "123",
				  username: username,
				  password: pwd,
				  failedLogin: loginFailedCount,
				  loginStatus: 200,
				  loginStatusCode:"Success"
		  }
		  res.json(loginResponse);
	  }else{
		  var errResponse;
		  loginFailedCount++;
		  if(loginFailedCount<=3){
			  errResponse = {
					  errorMessage: "Login Failed",
					  errorCode: 5,
					  failedLogin: loginFailedCount
			  }
			  //handleError(res, "Login Failed", 5, loginFailedCount);
		  }else{
			  console.log("Maximum Failed Login Reached");
			  errResponse = {
					  errorMessage: "Maximum Failed Login Reached",
					  errorCode: 5,
					  failedLogin: loginFailedCount
			  }
			  //handleError(res, "Maximum Failed Login Reached", 5, loginFailedCount);
		  }
		  res.json(errResponse);
	  }
  }
  
  functions.createUser = function(req, res){
	  console.log("CreateUser method called");
	  var userInfos = req.body;
	  console.log(userInfos)
	  db.eventplanner.insert(userInfos, function(err, userInfo){
		  if(err){
			  handleError(res, err.errorMessage, err.errorCode);
		  }
		  res.json(userInfo);
	  })
  }
  
  /*function handleError(res, errMsg, errCode, failedLoginCount){
	  var errorObj = { 
			  		errorMessage: this.errMessage,
			  		errorCode: this.errCode,
			  		failedLoginCount: this.failedLoginCount
			  }
	  res.json(errorObj);
  }*/
  return functions;
}