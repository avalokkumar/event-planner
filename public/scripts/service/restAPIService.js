eventPlanner.service('restAPIService',['$http', 
function($http){    
	var restServices = {};
	
	restServices.getDetails = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/dummydata',
			headers: { 'Content-Type': 'application/json'}
		 });
    }
	
    restServices.validateUser = function(userName, password){
    	alert('validateCredentials called in service')
		var userCredentials = {
				username: userName,
				pwd: password
		}
		return $http({
			method: "POST",
			url: 'http://localhost:3000/login',
			headers: {'Content-Type': 'application/json'}
		});
    }
    return restServices;
}])