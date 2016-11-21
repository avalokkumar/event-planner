var eventPlanner = angular.module('eventPlanner',['ui.router','ngSanitize', 'angularMask'])
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

angular.module('eventPlanner').controller('loginCtrl',['$scope','$location','loginService', 
function loginCtrl($scope,$location, loginService){
	console.log('Initializing loginCtrl')
	$scope.hello = "Hello";
	loginService.getDetails().then(function(response){
		console.log(response.data);
	})
	$scope.ack = function(){
		console.log($scope.username+ " | "+$scope.pwd)
		loginService.validateCredentials($scope.username, $scope.pwd).then(loginSuccessCallback, errorCallback);
  	}
	function loginSuccessCallback(response){
		var res = response.data;
		console.log("Login Success Response")
		console.log(res);
	}
	function errorCallback(response){
		console.log('errorCallback Called')
		var errObj = response.data;
		console.log(errObj.errorMessage);
	}	
	function successCallback(response){
		var data = response.data;
		console.log(data);
		console.log("Data: Name : "+data[0].name);
	}
}]);

angular.module('eventPlanner').controller('registerCtrl',['$scope','$location','loginService', 
function loginCtrl($scope,$location, loginService){
	$scope.registerTitle = "User Registration";
	$scope.countries = ['INDIA', 'CHINA', 'BRAZIL', 'RUSSIA', 'USA'];
	$scope.states = ['JHARKHAND', 'BIHAR', 'KARNATAKA', 'UTTAR PRADESH', 'ORISSA'];
}])



