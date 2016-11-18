var eventPlanner = angular.module('eventPlanner',['ui.router'])
.run(function(){
	console.log('App has started running!')
});

eventPlanner.controller('mainController', ['$scope', function($scope, $location){
	$scope.title = "Plan Your Event";
	$scope.ack = function(){
		//alert(loginService.validateCredentials())
		alert('Login Success!')
	}
}]);

function loginSuccessCallback(response){
	
}
function errorCallback(response){
	
}
angular.module('eventPlanner').controller('loginCtrl',['$scope','$location','loginService', function loginCtrl($scope, loginService){
	console.log('Initializing loginCtrl')
	$scope.hello = "Hello";
	$scope.ack = function(){
		loginService.validateCredentials($scope.username, $scope.pwd).then(loginSuccessCallback, errorCallback);
		alert('Login Success!')
  	}
  }]);