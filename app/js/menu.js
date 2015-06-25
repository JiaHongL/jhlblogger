myApp.controller('menuCtrl', ['$rootScope','$scope','$state','$stateParams','$location','blogger',function ($rootScope,$scope,$state,$stateParams,$location,blogger) {
// $rootScope.$state = $state;
//  console.log($state);

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
