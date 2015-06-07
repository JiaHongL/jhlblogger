myApp.controller('menuCtrl', ['$rootScope','$scope','$state','$stateParams','$location','blogger',function ($rootScope,$scope,$state,$stateParams,$location,blogger) {
// $rootScope.$state = $state;
//  console.log($state);

blogger.check_state().then(function(res){
});

$scope.logout = function() {
	$rootScope.$login_stage = '';
	$location.path("/home");
}

}]);
