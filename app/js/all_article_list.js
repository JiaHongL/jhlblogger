myApp.controller('all_article_listCtrl', ['$scope','blogger','$rootScope',function ($scope,blogger,$rootScope) {

$scope.is_all_list = false;

blogger.get_all_article().then(function(res){
	// console.log(res);
	$scope.article_list = res.data.results;
	$scope.is_all_list = true;

});

}]);