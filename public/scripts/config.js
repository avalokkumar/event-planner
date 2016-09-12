angular.module('eventPlanner')
    .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider) {
    	$urlRouterProvider.otherwise('/');
    }]);
