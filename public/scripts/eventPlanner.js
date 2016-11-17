var eventPlanner = angular.module('eventPlanner',['ui.router'])
.run(function(){
	console.log('App has started running!')
});

eventPlanner.controller('mainController', ['$scope', function($scope){
	$scope.title = "Plan Your Event";
	$scope.ack = function(){
		//alert(loginService.validateCredentials())
		alert('Login Success!')
	}
}]);

eventPlanner.controller('loginCtrl',['$scope','loginService', function loginCtrl($scope, loginService){
	console.log('Initializing loginCtrl')
	$scope.hello = "Hello";
	$scope.username = "Alex";
	$scope.pwd = "@lex";
	$scope.ack = function(){
		//alert(loginService.validateCredentials())
		loginService.validateCredentials();
		alert('Login Success!')
  	}
  }]);