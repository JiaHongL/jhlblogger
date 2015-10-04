myApp.controller('class_pageCtrl', ['$rootScope','$scope','blogger','$location','$stateParams','$sce',function ($rootScope,$scope,blogger,$location,$stateParams,$sce) {
	// console.log($stateParams.class);
var get_page = 1;
var all_limit = 0; 
var get_limit =0; 
var get_load_page = 1; 
var get_max_page = 0;
var delete_objectid = '';  
var edit_objectid = ''


//取得頁碼
$scope.get_now_class_page = function() {
  blogger.check_class_row_api($stateParams.class).then(function(res){
  get_max_page = res;
  var pagearray = new Array(res) ;
  for (i=0; i<res; i=i+1)
  {
    pagearray[i] = {page:i+1};
  }
  $scope.page =  pagearray;
  });
};
$scope.get_now_class_page($stateParams.class);

//取得文章數量
$scope.get_now_class_count = function() {
  blogger.get_all_class_count($stateParams.class).then(function(res){
    all_limit = res;
    $scope.iflimit = res;
    // console.log($scope.iflimit);
  });
};
$scope.get_now_class_count($stateParams.class);

//顯示文章列
$scope.classpage = function(page) {
  // console.log(page);
  get_load_page = page;
  get_page = (page-1)*15;
  get_limit = all_limit - get_page;
  if(get_page==0||get_limit>15){
    get_limit = 15;
  }
  // console.log(get_page+','+get_limit);
  blogger.get_class_article($stateParams.class,get_page,get_limit).then(function(res){
    // console.log(res.data.results);
    $scope.article_list = res.data.results;
  });
};
$scope.classpage(1);

  // blogger.get_class_article($stateParams.class).then(function(res){
  // 	console.log(res);
  // 	$scope.article_list=res.data.results;
  // });
$scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
};

}]);