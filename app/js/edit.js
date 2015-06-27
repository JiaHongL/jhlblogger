myApp.controller('editCtrl', ['$scope','blogger','$rootScope','$location',function ($scope,blogger,$rootScope,$location) {
	// alert("11111");
if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
        $location.path("/home");
    }else{
        // console.log('login');    
    }
var get_page = 1;
var all_limit = 0; 
var get_limit =0; 
var get_load_page = 1; 
var get_max_page = 0;
var delete_objectid = '';  
var edit_objectid = ''

$scope.edit_view_status = 'edit1';



//取得頁碼
$scope.get_now_edit_page = function() {
  blogger.check_edit_row_api().then(function(res){
  get_max_page = res;
  // console.log(get_max_page);
  var pagearray = new Array(res) ;
  for (i=0; i<res; i=i+1)
  {
    pagearray[i] = {page:i+1};
  }
  $scope.page =  pagearray;
  // console.log($scope.page);
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
  console.log(page);
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

//刪除文章

$scope.delete_edit_tip = function(objectid){
	delete_objectid = objectid;
	$('#myModal').modal('toggle')
};

$scope.delete_edit_button = function(){
	$scope.delete_edit(delete_objectid);	
};

$scope.delete_edit = function(objectid) {
  blogger.delete_edit_api(objectid).then(function(res){
    // console.log(res);
    // $scope.get_now_edit_count();
    // $scope.get_now_edit_page();
    $scope.photopage_det_edit();
  }); 
};

//刪除文章後
$scope.photopage_det_edit= function() {
  blogger.check_edit_row_api().then(function(res){
    get_max_page = res;
    if(get_load_page==1){
      $scope.photopage(get_load_page);
      $scope.get_now_edit_page();

    }
    else{
      $scope.photopage(get_max_page);
      $scope.get_now_edit_page();

    }
    
  });
};


$scope.edit_view = function (object_id) {
	edit_objectid = object_id; 
	blogger.get_edit_article(edit_objectid).then(function(res) {
		// console.log(res.data.results);
		$scope.dropdown_value = res.data.results[0].class;
		$scope.title = res.data.results[0].title;
		$scope.tinymceModel = res.data.results[0].article;
		$scope.edit_view_status = 'edit2';
	});
}



//編輯文章
// $scope.dropdown_value='class';
$scope.all_photo_url = ''

blogger.all_photo_api2().then(function(res){
    var pagearray = new Array(res.data.results.length) ;
    for (i=0; i<res.data.results.length; i=i+1)
     {
        pagearray[i] = {title:res.data.results[i].name,value:res.data.results[i].url};
    }
    $scope.all_photo_url = pagearray;
    // console.log($scope.all_photo_url);

});





$scope.tinymceOptions = {
    theme: "modern",
    plugins: [
         "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
    ],
    image_list: function(success) {
        success($scope.all_photo_url);
    },
    paste_remove_styles_if_webkit: false,
    toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
        toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    // toolbar_items_size: 'small',
        extended_valid_elements : "video[controls|preload|width|height|data-setup],source[src|type]",

        style_formats: [
                {title: 'Bold text', inline: 'b'},
                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
                {title: 'Example 1', inline: 'span', classes: 'example1'},
                {title: 'Example 2', inline: 'span', classes: 'example2'},
                {title: 'Table styles'},
                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],
    image_advtab: true,
    height: "400px",
    // width: "650px"
};

$(".item").click(function(){
    $scope.dropdown_value = $(this).text();
});


$scope.get_value = function(){
    blogger.get_article_update(edit_objectid,$scope.dropdown_value,$scope.title,$scope.tinymceModel).then(function(res){
      $scope.edit_view_status = 'edit1';
      // console.log(res);
    });
}

$scope.up_photo = function(){
    blogger.all_photo_api2().then(function(res){
        var pagearray = new Array(res.data.results.length) ;
        for (i=0; i<res.data.results.length; i=i+1)
         {
            pagearray[i] = {title:res.data.results[i].name,value:res.data.results[i].url};
        }
        $scope.all_photo_url = pagearray;
    });
}



}]);
