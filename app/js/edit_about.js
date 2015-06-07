myApp.controller('edit_aboutCtrl', ['$scope','blogger','$rootScope','$location',function ($scope,blogger,$rootScope,$location) {
	// alert("11111");
if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
		$location.path("/home");
	}else{
		// console.log('login');	
	}
	
blogger.about_api().then(function(res){
	 // console.log(res.data.results[0]);
	 // $scope.intro_img = res.data.results[0].photo.url;
	 // $scope.about_img = res.data.results[0].photo.url;
	 $scope.about_name = res.data.results[0].name;
	 $scope.about_blogger =  res.data.results[0].skill;
	 $scope.about_me = res.data.results[0].intro;
	 $scope.about_version = res.data.results[0].version;
	 $scope.object_id = res.data.results[0].objectId;
});

$('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // $btn.button('reset')
  })


$scope.about_update = function(){
blogger.get_about_update($scope.object_id,$scope.about_name ,$scope.about_blogger,$scope.about_me 
	,$scope.about_version).then(function(res){
	 // console.log(res);
	 $('#myButton').button('reset');
	});
}


}]);
