myApp.controller('backstageCtrl', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
	// console.log($rootScope.$login_stage);
	if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
		$location.path("/home");
	}else{
		// console.log('login');	
	}

}]);

