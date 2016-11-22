eventPlanner.service('restAPIService',['$http',
function($http){    
	var restServices = {};
	var ext_service_groupkt_base_url = 'http://services.groupkt.com/state/get/'
	restServices.getDetails = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/dummydata',
			headers: { 'Content-Type': 'application/json'}
		 });
    } 
	
    restServices.validateUser = function(userName, password){
		var userCredentials = {
				username: userName,
				pwd: password
		}
		return $http({
			method: "POST",
			url: 'http://localhost:3000/login',
			data: userCredentials,
			headers: {'Content-Type': 'application/json'}
		});
    }
    
    restServices.registerUser = function(userData){
    	return $http({
    		method: "POST",
    		url: "http://localhost:3000/register",
    		headers: {'Content-Type': 'application/json'}
    	});
    	
    	$http.post('/register', userDetails)
		   		.success(function(response){
		   			console.log(response);
		   			if(response.isSuccess){
		   				console.log('User details Successfully registered');
		   			}
		   		});
    }
    restServices.getStatesByCountryCode = function(countryCode){
    	return $http({
    		method: 'GET',
    		url: ext_service_groupkt_base_url+countryCode+'/all',
    		headers: {'Content-Type': 'application/json'}
    	});
    }
    
    return restServices;
}])