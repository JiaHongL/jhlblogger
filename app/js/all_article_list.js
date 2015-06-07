myApp.controller('all_article_listCtrl', ['$scope','blogger','$rootScope',function ($scope,blogger,$rootScope) {
blogger.get_all_article().then(function(res){
	// console.log(res);
	$scope.article_list = res.data.results;
});

}]);