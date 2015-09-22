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







// $scope.myInterval = 3000;
// $scope.noWrapSlides = true;
// var slides = $scope.slides = [];

// $scope.addSlide = function() {
//     blogger.get_hot_article().then(function(res){
//         // console.log(res.data.results);
//         for (var i=0; i<3; i++) {
//             slides.push({
//                   image: '',
//                   text: res.data.results[i].title ,
//                   // +' ( '+ res.data.results[i].hot_count +' ) '
//                   src:res.data.results[i].objectId ,
//             });
//         }

//     });
    
// };

// $scope.addSlide();

 



}]);
