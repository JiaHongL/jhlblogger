myApp.controller('aboutCtrl', ['$scope','blogger','$rootScope',function ($scope,blogger,$rootScope) {

	blogger.about_api().then(function(res){
		 // console.log(res.data.results[0]);
		 $scope.intro_img = res.data.results[0].photo.url;
		 $scope.intro_name = res.data.results[0].name;
		 $scope.intro_skill = res.data.results[0].skill;
		 $scope.intro_me = res.data.results[0].intro;
		 $scope.intro_version = res.data.results[0].version;
	});
}]);
