eventPlanner.config(['$urlRouterProvider','$stateProvider',
             function($urlRouterProvider, $stateProvider) {
         		$urlRouterProvider.otherwise('login');
         		$stateProvider
         			.state('home', {
         				url:'/home',
         				controller: function($scope){
         					console.log('Inside homeController')
         				},
         				templateUrl: '../views/home.html'
         			})
         			.state('login', {
         				url:'/login',
         				templateUrl: '../views/login.html',
         				controller: 'loginCtrl'
         			}).
         			state('register', {
         				url: '/register',
         				templateUrl: '../views/register.html',
         				controller: 'registerCtrl'
         			})
}]);