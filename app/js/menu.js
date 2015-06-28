myApp.controller('menuCtrl', ['$rootScope','$scope','$state','$stateParams','$location','blogger',function ($rootScope,$scope,$state,$stateParams,$location,blogger) {
// $rootScope.$state = $state;
//  console.log($state);


$(document).ready(function(){
    $(".fakeloader").fakeLoader({
        timeToHide:1200,
        bgColor:"#fff",
        imagePath:"http://files.parsetfss.com/94c0de81-23b3-4a8c-842f-d063b93005c3/tfss-f349d9ea-8f01-46cd-98c8-cff32eb3a898-cooltext124048774645629.png"
    });
});


blogger.check_state().then(function(res){
});

$scope.logout = function() {
	$rootScope.$login_stage = '';
	$location.path("/home");
}

$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});


}]);
