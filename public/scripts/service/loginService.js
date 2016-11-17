eventPlanner.service('loginService',['$http', function($http){
	this.validateCredentials = function(){
		alert('Success- Service')
		console.log('User details Successfully Validated');
	}
	
	return {
		validateCredentials: this.validateCredentials
	};
}])