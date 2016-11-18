eventPlanner.service('loginService',['$http', function($http){
	
	var loginServices = {};
	
	loginServices.getDetails = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/dummydata',
			headers: { 'Content-Type': 'application/json'}
		 });
	}
	
	loginServices.validateCredentials = function(userName, password){
		var userCredentials = {
				username: userName,
				pwd: password
		}
		
		return $http.post('/login', userCredentials)
		   		.success(function(response){
		   			console.log(response);
		   			if(response.isSuccess){
		   				console.log('User details Successfully Validated');
		   				
		   			}
		   		});
	}
	
	return loginServices;
}])