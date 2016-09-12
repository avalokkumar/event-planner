angular.module('eventPlanner',['ui.router'])
.factory('appService',['$localStorage', function($localStorage){
	
}])
.controller('mainController', ['$scope', function($scope){
	$scope.title = "Plan Your Event";
}]);