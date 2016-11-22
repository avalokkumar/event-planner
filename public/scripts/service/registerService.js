eventPlanner.service('registerService',['$http', 'restAPIService', function($http, restAPIService){
	var registerServices = {};
	
	registerServices.registerUser = function(userDetails){
		return restAPIService.registerUser(userDetails);
	}
	
	registerServices.getStatesByCountryCode = function(countryCode){
		return restAPIService.getStatesByCountryCode(countryCode);
	}
	
	return registerServices;
}])