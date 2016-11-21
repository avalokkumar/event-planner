eventPlanner.service('loginService',['restAPIService', 
function(restAPIService){
	
	var loginServices = {};
	
	loginServices.getDetails = function(){
		return restAPIService.getDetails();
	};
	
	loginServices.validateCredentials = function(userName, password){
		console.log('validateCredentials called');
		return restAPIService.validateUser(userName, password);
	};
	
	return loginServices;
}])