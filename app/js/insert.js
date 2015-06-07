myApp.controller('insertCtrl', ['$scope','blogger','$location','$rootScope',function ($scope,blogger,$location,$rootScope) {
if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
        $location.path("/home");
    }else{
        // console.log('login');    
    }

$scope.dropdown_value='other';
$scope.all_photo_url = ''

blogger.all_photo_api().then(function(res){
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
        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen",
        "insertdatetime media nonbreaking save table contextmenu directionality",
        "emoticons template paste textcolor"
    ],
    image_list: function(success) {
        success($scope.all_photo_url);
    },
    toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    toolbar2: "print preview media | forecolor backcolor emoticons",
    image_advtab: true,
    height: "400px",
    // width: "650px"
};

blogger.check_state().then(function(res){
});

var dt=new Date();
var month = dt.getMonth()+1
$scope.time = dt.getFullYear() + '-' + month + '-' + dt.getDay() ;

$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());;
});

$(".item").click(function(){
    $scope.dropdown_value = $(this).text();
});


$scope.get_value = function(){
	// alert($scope.time);
	// alert($scope.title);
	// alert($scope.tinymceModel);
    blogger.add_article($scope.dropdown_value,$scope.title,$scope.tinymceModel).then(function(res){
        // console.log(res);
        $location.path("/edit");
    });
}





}]);
