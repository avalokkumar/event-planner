angular.module('eventPlanner').config(['$urlRouterProvider','$stateProvider','$controllerProvider',function($urlRouterProvider, $stateProvider, $controllerProvider) {
	
	$controllerProvider.allowGlobals();
	$urlRouterProvider.otherwise('login');
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: '../views/home.html'
		})
		.state('login', {
			url:'/login',
			controller:'loginCtrl',
			templateUrl: '../views/login.html'
		})
}]);