eventPlanner.service('restAPIService',['$http','constant',
function($http, constant){    
	var restServices = {};
	
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
			headers: {'Content-Type': 'application/json'}
		});
    }
    
    restServices.getCountryById = function(countryCode){
    	return $http({
    		method: 'GET',
    		url: constant.ext_service_groupkt_base_url+countryCode+'/all',
    		headers: {'Content-Type': 'application/json'}
    	});
    }
    
    return restServices;
}])