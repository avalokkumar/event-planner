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

eventPlanner.controller('loginCtrl',['$scope','$location','loginService',
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
		//.path('/home');
	}
	function errorCallback(response){
		console.log("Login Failed")
		var errObj = response.data;
		console.log(errObj.errorMessage);
	}	
	function successCallback(response){
		var data = response.data;
		console.log(data);
		console.log("Data: Name : "+data[0].name);
	}
}]);

eventPlanner.controller('registerCtrl',['$scope','$location', 'registerService', 
function registerCtrl($scope, $location, registerService){
	$scope.registerTitle = "User Registration";
	$scope.countries = [{'code': 'IND', 'value': 'INDIA'},
						  {'code':'USA', 'value': 'UNITED STATES OF AMERICA'}];
	
	$scope.states = [];
	$scope.userDetails = {};
	$scope.loadStateDetails = function(){
		$scope.states = [];
		registerService.getStatesByCountryCode($scope.userDetails.country).then(successCallback, errorCallback);	
	}
	
	$scope.registerUser = function(userDetails){
		console.log('Sending below user details for registration');
		console.log(userDetails);
		registerService.registerUser(userDetails).then(registerSuccessCallback, registerErrorCallback);
	}
	
	$scope.resetUser = function(userDetails){
		userDetails = {};
	}
	
	function registerSuccessCallback(response){
		var responseObj = response.data;
		console.log(responseObj);
		//console.log(responseObj.registerStatusMessage);
	}
	function registerErrorCallback(response){
		
	}
	
	function successCallback(response){
		/*for(var state in response.data.RestResponse.result){
			$scope.states.push(state.name);
		}*/
		for (var i = 0; i < response.data.RestResponse.result.length; i++) {
			$scope.states.push(response.data.RestResponse.result[i].name)
		}
	}
	function errorCallback(response){
		console.log(response.errorMessage);
	}
}]);



