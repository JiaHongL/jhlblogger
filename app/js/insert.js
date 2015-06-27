myApp.controller('insertCtrl', ['$scope','blogger','$location','$rootScope',function ($scope,blogger,$location,$rootScope) {
if ($rootScope.$login_stage == undefined || $rootScope.$login_stage == null||$rootScope.$login_stage == ''){
        $location.path("/home");
    }else{
        // console.log('login');    
    }

$scope.dropdown_value='other';
$scope.all_photo_url = ''

blogger.all_photo_api2().then(function(res){
    var pagearray = new Array(res.data.results.length) ;
    for (i=0; i<res.data.results.length; i=i+1)
     {
        pagearray[i] = {title:res.data.results[i].name,value:res.data.results[i].url};
    }
    $scope.all_photo_url = pagearray;
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
    blogger.add_article($scope.dropdown_value,$scope.title,$scope.tinymceModel).then(function(res){
        $location.path("/edit");
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
