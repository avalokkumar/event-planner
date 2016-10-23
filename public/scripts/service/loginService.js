angular.module('eventPlanner').factory('loginService',['$localStorage', function($localStorage){
	function validateCredentials(){
		return "successfully logged in";
	}
}])