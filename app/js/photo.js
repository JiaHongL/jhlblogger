myApp.controller('photoCtrl', ['$rootScope','$scope','blogger','$location','$http',function ($rootScope,$scope,blogger,$location,$http) {
  // if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
  //   $location.path("/home");
  // }else{
  //   // console.log('login');  
  // }

var get_page = 1;
var all_limit = 0; 
var get_limit =0; 
var get_load_page = 1; 
var get_max_page = 0;
var delete_objectid = '';
$scope.de_title = ''; 
//顯示幾頁碼
$scope.maxSize = 10;


$('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // $btn.button('reset')
  })

//取得相片數量
$scope.get_now_photo_count = function() {
  blogger.get_all_photo_count().then(function(res){
    // console.log(res);
    all_limit = res;
  });
  
};
$scope.get_now_photo_count();

//取得頁碼
$scope.get_now_photo_page = function() {
  blogger.check_photo_row_api().then(function(res){
  // console.log(res);
  get_max_page = res;
  $scope.bigTotalItems = get_max_page * 10;

  // var pagearray = new Array(res) ;
  // for (i=0; i<res; i=i+1)
  // {
  //   pagearray[i] = {page:i+1};
  // }
  // $scope.page =  pagearray;
  });
};
$scope.get_now_photo_page();


//上傳檔案
$scope.uploadFile = function(files) {
  $scope.files_img = files;
};

//上傳照片
$scope.uploadFile2 = function() {

	$('#myButton').click(function () {
    var btn = $(this);
    btn.button('loading');
	});

	var files = $scope.files_img;
  // console.log(angular.identity);
  console.log(files);
    $http.post("https://api.parse.com/1/files/" + files[0].name, files[0], {
           withCredentials: false,
           headers: {
               'X-Parse-Application-Id': '34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8',
               'X-Parse-REST-API-Key': '90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
               'Content-Type': files[0].type
           },
           transformRequest: angular.identity
    }).then(function(data) {
      	console.log(data);
      	var old_name = data.data.name ;
      	var new_name = old_name.slice(42);
        blogger.check_photo_row_api().then(function(res){
          var page = res ; 
        	blogger.upload_img_api(new_name,old_name,data.data).then(function(res){
    		 	console.log(res);
    		 	if (res.status=='201'){
    		 		$('#myButton').button('reset');
            $scope.get_now_photo_count();
            $scope.get_now_photo_page();
            $scope.photopage_load();          
          }
          }); 	
  		});
    });
}

//刪除照片提示
$scope.delete_re_tip = function(objectid,title){
  delete_objectid = objectid;
  $scope.de_title = title;
  $('#myModal').modal('toggle')
};


//刪除照片
$scope.deletephoto = function() {
  blogger.delete_photo_api(delete_objectid).then(function(res){
    $scope.get_now_photo_count();
    $scope.get_now_photo_page();
    $scope.photopage_det();
  }); 
};




//顯示圖片
$scope.photopage = function(page) {
  // console.log(page);
  get_load_page = page;
  get_page = (page-1)*9;
  get_limit = all_limit - get_page;
  if(get_page==0||get_limit>9){
    get_limit = 9;
  }
  // console.log(get_page);
  // console.log(get_limit);
  blogger.photo_api(get_page,get_limit).then(function(res){
    // console.log(res.data.results);
    $scope.page_photo = res.data.results;
  });
};
$scope.photopage(1);

//上傳照片後
$scope.photopage_load= function() {
  blogger.check_photo_row_api().then(function(res){
    // console.log(res);
    get_max_page = res;
    $scope.bigTotalItems = get_max_page * 10;
    $scope.bigCurrentPage = get_max_page;

    $scope.photopage(get_max_page);
  });
};

//刪除照片後
$scope.photopage_det= function() {
  blogger.check_photo_row_api().then(function(res){
    // console.log(res);
    get_max_page = res;
    $scope.bigTotalItems = get_max_page * 10;
    $scope.bigCurrentPage = get_max_page;

    if(get_load_page==1){
      $scope.photopage(get_load_page);
    }
    else{
      $scope.photopage(get_max_page);
    }
    
  });
};


// blogger.files().then(function(res){
//   console.log(res);
// });
  


  
  
}]);

