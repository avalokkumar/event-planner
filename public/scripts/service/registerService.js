eventPlanner.service('register',['$http', function($http){
	
	var registerUser = function(userDetails){

		$http.post('/register', userDetails)
		   		.success(function(response){
		   			console.log(response);
		   			if(response.isSuccess){
		   				console.log('User details Successfully registered');
		   			}
		   		});
	}
	
	return {
		validateCredentials: this.validateCredentials
	};
}])