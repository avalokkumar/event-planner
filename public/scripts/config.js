angular.module('eventPlanner')
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider) {
    	
    	$urlRouterProvider.otherwise('/');
    	$stateProvider
    		.state('home', {
    			url:'/home',
    			templateUrl: '../views/home.html'
    		})
    }]);
