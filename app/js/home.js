myApp.controller('homeCtrl', ['$scope','blogger', function ($scope,blogger) {
var get_page = 1;
var all_limit = 0; 
var get_limit =0; 
var get_load_page = 1; 
var get_max_page = 0;
var delete_objectid = '';  
var edit_objectid = ''

//取得頁碼
$scope.get_now_edit_page = function() {
  blogger.check_edit_row_api().then(function(res){
  get_max_page = res;
  var pagearray = new Array(res) ;
  for (i=0; i<res; i=i+1)
  {
    pagearray[i] = {page:i+1};
  }
  $scope.page =  pagearray;
  });
};
$scope.get_now_edit_page();

//取得文章數量
$scope.get_now_edit_count = function() {
  blogger.get_all_edit_count().then(function(res){
    all_limit = res;
  });
};
$scope.get_now_edit_count();

//顯示文章列
$scope.photopage = function(page) {
  // console.log(page);
  get_load_page = page;
  get_page = (page-1)*15;
  get_limit = all_limit - get_page;
  if(get_page==0||get_limit>15){
    get_limit = 15;
  }
  // console.log(get_page+','+get_limit);
  blogger.get_article(get_page,get_limit).then(function(res){
    // console.log(res.data.results);
    $scope.article_list = res.data.results;
  });
};
$scope.photopage(1);



}]);


myApp.directive('gettag', [function() {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
		}
	};
}])

