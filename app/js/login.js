myApp.controller('loginCtrl', ['$rootScope','$scope','blogger','$location',function ($rootScope,$scope,blogger,$location) {
	// $scope.username = 'admin';
	// $scope.password = 'admin';
	$scope.login = function(username,password){
		blogger.login_api(username,password).then(function(res){
			 // console.log(res);
			if (res=='erro'){
				$('#myModal').modal('toggle')
			}
			else{
				$rootScope.$login_stage = 'login';
				$location.path("/edit");
			}
		});
	}
}]);
