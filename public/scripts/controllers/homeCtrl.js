angular.module('eventPlanner',[])
.controller('homeCtrl',['$scope', function($scope){
	
	$scope.hello = "hello menu";
	$scope.menuItems = ["Show Events",
						  "Show Participants",
						  "Show Service locations",
						  "Add Reminder to Event",
						  "View Reminders"];
}]);