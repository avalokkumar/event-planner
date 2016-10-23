var eventPlanner = angular.module('eventPlanner',['ui.router'])
.factory('appService',['$localStorage', function($localStorage){
	
}])
.controller('mainController', ['$scope', function($scope){
	$scope.title = "Plan Your Event";
}])
.controller('loginCtrl',['$scope','loginService', function loginCtrl($scope, loginService){
	$scope.hello = "Hello"
	$scope.username = "Alex";
	$scope.pwd = "@lex";
	
	$scope.ack = function(){
		//alert(loginService.validateCredentials())
		alert('Login Success!')
	}
	
}]);