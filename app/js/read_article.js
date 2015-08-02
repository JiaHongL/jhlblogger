myApp.controller('read_articleCtrl', ['$rootScope','$scope','blogger','$location','$stateParams','$sce',function ($rootScope,$scope,blogger,$location,$stateParams,$sce) {


$('#myButton').on('click', function () {
    var $btn = $(this).button('loading')
    // $btn.button('reset')
  })



blogger.get_read_article($stateParams.id).then(function(res){
	// console.log(res.data.results);
	$scope.article_list = res.data.results;
});

blogger.get_message($stateParams.id).then(function(res){
	// console.log(res);
	$scope.message_list =res.data.results;
});

$scope.get_message_again = function () {
	$('#myButton').button('reset');
	blogger.get_message($stateParams.id).then(function(res){
		// console.log(res);
		$scope.message_list =res.data.results;
	});
}

$scope.message_post = function(name,message) {
	var reply_message = '0' ;
	if(name==undefined || name ==''){
		name ='訪客'
	}
	if(message==undefined || name==''){
		console.log('no message');
		$('#myButton').button('reset');
	}
	else{
		blogger.add_message($stateParams.id,name,message,reply_message).then(function(res){
			// console.log(res);
			$scope.username = '';
			$scope.message = '';
			$scope.get_message_again();
		});
	}
};
$scope.trustAsHtml = function(string) {
    return $sce.trustAsHtml(string);
};



}]);