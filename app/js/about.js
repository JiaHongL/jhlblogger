myApp.controller('aboutCtrl', ['$scope','blogger','$rootScope',function ($scope,blogger,$rootScope) {

	blogger.about_api().then(function(res){
		 // console.log(res.data.results[0]);
		 $scope.intro_img = res.data.results[0].photo.url;
		 $scope.intro_name = res.data.results[0].name;
		 $scope.intro_skill = res.data.results[0].skill;
		 $scope.intro_me = res.data.results[0].intro;
		 $scope.intro_version = res.data.results[0].version;
	});
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-64071861-1', 'auto');
  ga('send', 'pageview');
  ga('require', 'displayfeatures');
}]);
