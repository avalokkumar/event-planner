eventPlanner.config(['$urlRouterProvider','$stateProvider',
             function($urlRouterProvider, $stateProvider) {
         		$urlRouterProvider.otherwise('home');
         		$stateProvider
         			.state('home', {
         				url:'/home',
         				templateUrl: '../views/home.html',
         				controller: 'homeCtrl'
         			})
         			.state('register', {
         				url: '/register',
         				templateUrl: '../views/register1.html',
         				controller: 'registerCtrl'
         			})
         			.state('event', {
         				url: '/createEvent',
         				templateUrl: '../views/createEvent.html',
         				controller: 'eventCtrl'
         			});
}]);