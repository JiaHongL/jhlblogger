myApp.controller('messageCtrl', ['$scope','blogger','$rootScope','$location',function ($scope,blogger,$rootScope,$location) {
if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
        $location.path("/home");
    }else{
        // console.log('login');    
    }

$scope.message_view_status = 'message_0';
$scope.old_view_status = $scope.message_view_status;
$scope.re_0_count = '';
$scope.re_1_count = '';
var get_page = 1;
var all_limit = 0; 
var get_limit =0; 
var get_load_page = 1; 
var get_max_page = 0; 
var old_page = 1;

//0 未回覆
$scope.get_message_0 = function(page) {
	// $scope.page = '';
	$scope.get_0_1_count();
	$scope.get_re_count('0');
	$scope.get_re_page_count('0');
	get_load_page = page;
	old_page = page;
  	get_page = (page-1)*10;
  	get_limit = all_limit - get_page;
	if(get_page==0||get_limit>10){
	   get_limit = 10;
	}
	$scope.new_message_list ='';
	$scope.message_view_status = 'message_0';
	$scope.old_view_status = $scope.message_view_status;
	blogger.get_all_message('0',get_page,get_limit).then(function(res){
		// console.log(res);
		$scope.new_message_list = res.data.results;
	});
}

//1 已回覆
$scope.get_message_1 = function(page) {
	// $scope.page = '';
	$scope.get_0_1_count();
	$scope.get_re_count('1');
	$scope.get_re_page_count('1');
	get_load_page = page;
	old_page = page;
  	get_page = (page-1)*10;
  	get_limit = all_limit - get_page;
	if(get_page==0||get_limit>10){
	   get_limit = 10;
	}
	$scope.new_message_list ='';
	$scope.message_view_status = 'message_1';
	$scope.old_view_status = $scope.message_view_status;
	blogger.get_all_message('1',get_page,get_limit).then(function(res){
		// console.log(res);
		$scope.new_message_list = res.data.results;
	});
}

//切換回應文章
$scope.get_re = function(name,message,id,title) {
	$scope.re_title = title;
	$scope.re_id = id; 
	$scope.re_name = name ;
	$scope.re_message = message ;
	$scope.message_view_status='re_status';
}

//切換回覆文章2
$scope.get_re2 = function(name,message,id,reply_message,title) {
	$scope.re_title = title;
	$scope.re_id = id; 
	$scope.re_name = name ;
	$scope.re_message = message ;
	$scope.message_view_status='re_status';
	$scope.message2 = reply_message;
}

//取消
$scope.cancel = function() {
	$scope.message2 = '';
	if($scope.old_view_status == 'message_1'){
		$scope.get_0_1_count();
		$scope.get_message_1(old_page);
	}else if($scope.old_view_status == 'message_0'){
		$scope.get_0_1_count();
		$scope.get_message_0(old_page);
	}

}

//回覆
$scope.push_re = function(){
	// console.log($scope.re_id);
	// console.log($scope.message2);
	var isre = '1';
    blogger.get_re_update($scope.re_id,$scope.message2,isre).then(function(res){
      	if($scope.old_view_status == 'message_1'){
			$scope.get_0_1_count();
			$scope.get_message_1(old_page);
		}else if($scope.old_view_status == 'message_0'){
			$scope.get_0_1_count();
			$scope.get_message_0(old_page);
		}
    });
}


//頁碼
$scope.get_re_page_count = function(reply_type) {
  blogger.check_re_row_api(reply_type).then(function(res){
  get_max_page = res;
  var pagearray = new Array(res) ;
  for (i=0; i<res; i=i+1)
  {
    pagearray[i] = {page:i+1};
  }
  $scope.page =  pagearray;
  });
};

//取得留言數量
$scope.get_re_count = function(reply_type) {
  blogger.get_all_re_count(reply_type).then(function(res){
    all_limit = res;
    // console.log(res);
  });
};


//取得切換欄留言數量
$scope.get_0_1_count= function() {
  blogger.get_all_re_count('0').then(function(res){
    $scope.re_0_count = res;
  });
   blogger.get_all_re_count('1').then(function(res){
    $scope.re_1_count = res;
  });
};






$scope.get_0_1_count();
$scope.get_message_0(1);
// $scope.get_re();




}]);