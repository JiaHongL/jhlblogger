var $parse_key
$parse_key = '90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg';  

myApp.factory('musicParameter',  [
	'$http', function($http) {
		return {
			token: function() {
				var token = undefined;
				return token;
			},		
		};
	}		
]);


myApp.factory('blogger',  [
	'$http','$rootScope','$state','$q', function($http,$rootScope,$state,$q) {
		return {
			about_api: function(){
				// console.log('http://127.0.0.1:3000/add?name='+ name +'&content=' + content);
				return $http({ 		
					url:('https://api.parse.com/1/classes/about'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg'
					},
				}).then(function(res) {	
		            return res;
				});
			},
			login_api: function(username,password){
				// console.log('http://127.0.0.1:3000/add?name='+ name +'&content=' + content);
				return	$http({ 		
					url:('https://api.parse.com/1/login'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg'
					},
					params:{
						username: username ,
	   	                password: password
					},
				})
				.then(// success callback
			    function(res) {
			     return res;
			    },
			    // error callback
			    function(res) {
			      return 'erro';
			   })
			},
			check_state: function(){
				 var deferred = $q.defer();
				$rootScope.$state = $state;
				// console.log($state);
				 return deferred.promise;
			},
			upload_img_api: function(new_name,old_name,file){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo'),
					method: 'post',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					 data:
					 { 
					 name: new_name,
					 old_name: old_name,
					 url: file.url,
					 }
				}).then(function(res) {	
		            return res;
				});
			},
			check_photo_row_api: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
					// console.log(res);
					var page = 0;
					if ((res.data.results.length%9)==0){
						if(res.data.results.length/9==0){
							page = res.data.results.length/9 + 1
						}
						else{
							page = res.data.results.length/9
						}
						}
					else{
						page = Math.ceil(res.data.results.length/9);
					}	
		            return page;
		   				// return res;
				});
			},
			get_all_photo_count: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
					return res.data.results.length;
				});
			},
			all_photo_api: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					order:'createdAt',	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			photo_api: function(start_skip,limit){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
						// where:{"page":page}
					limit:limit,
					skip:start_skip,
					order:'createdAt',	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			delete_photo_api: function(file_id){
				return $http({ 		
					url:('https://api.parse.com/1/classes/photo/'+ file_id),
					method: 'DELETE',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
		   			return res;
				});
			},
			add_article: function(class1,title,article){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'post',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					 data:
					 {
					 class:class1,
					 title:title, 
					 article: article,
					 }
				}).then(function(res) {	
		            return res;
				});
			},
			get_article: function(start_skip,limit){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					limit:limit,
					skip:start_skip,
					order:'createdAt',	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			check_edit_row_api: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
					// console.log(res);
					var page = 0;
					if ((res.data.results.length%15)==0){
						if(res.data.results.length/15==0){
							page = res.data.results.length/15 + 1
						}
						else{
							page = res.data.results.length/15
						}
						}
					else{
						page = Math.ceil(res.data.results.length/15);
					}	
		            return page;
		   				// return res;
				});
			},
			get_all_edit_count: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
					return res.data.results.length;
				});
			},
			delete_edit_api: function(file_id){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article/'+ file_id),
					method: 'DELETE',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
				}).then(function(res) {
		   			return res;
				});
			},
			get_edit_article: function(objectId){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					 where:{"objectId":objectId}
					},
				}).then(function(res) {
		   			return res;
				});
			},
			get_article_update: function(objectId,class1,title,article){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article/'+objectId),
					method: 'put',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					data:
					 {
					 class:class1,
					 title:title, 
					 article: article,
					 },
				}).then(function(res) {
		   			return res;
				});
			},
			get_about_update: function(objectId,name,skill,intro,version){
				return $http({ 		
					url:('https://api.parse.com/1/classes/about/'+objectId),
					method: 'put',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					data:
					 {
					 name:name,
					 skill:skill, 
					 intro: intro,
					 version:version,
					 },
				}).then(function(res) {
		   			return res;
				});
			},
			get_class_article: function(class2,start_skip,limit){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					where:{"class":class2},
					limit:limit,
					skip:start_skip,
					order:'createdAt',	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			check_class_row_api: function(class2){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},params:{
					where:{"class":class2},
					order:'createdAt',	
					},
				}).then(function(res) {
					// console.log(res);
					var page = 0;
					if ((res.data.results.length%15)==0){
						if(res.data.results.length/15==0){
							page = res.data.results.length/15 + 1
						}
						else{
							page = res.data.results.length/15
						}
						}
					else{
						page = Math.ceil(res.data.results.length/15);
					}	
		            return page;
		   				// return res;
				});
			},
			get_all_class_count: function(class2){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},params:{
					where:{"class":class2},
					order:'createdAt',	
					},
				}).then(function(res) {
					return res.data.results.length;
				});
			},
			get_read_article: function(objectId){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					where:{"objectId":objectId},	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			add_message: function(article_id,name,message,reply_type){
				return $http({ 		
					url:('https://api.parse.com/1/classes/message'),
					method: 'post',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					 data:
					 {
					 article_id:article_id,
					 name:name,
					 message:message,
					 reply_type:reply_type, 
					 }
				}).then(function(res) {	
		            return res;
				});
			},
			get_message: function(article_id){
				return $http({ 		
					url:('https://api.parse.com/1/classes/message'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					where:{"article_id":article_id},
					order:'createdAt',	
					},
				}).then(function(res) {
		   			return res;
				});
			},
			get_all_article: function(){
				return $http({ 		
					url:('https://api.parse.com/1/classes/article'),
					method: 'get',
					headers: 
					{ 
					'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
					'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
					},
					params:{
					order:'createdAt',	
					},
				}).then(function(res) {
					return res;
				});
			}

			
		};
	}

]);

// http://files.parsetfss.com/94c0de81-23b3-4a8c-842f-d063b93005c3

			// delete_files_api: function(file_id){
			// 	return $http({ 		
			// 		url:('https://api.parse.com/1/files/'+ file_id),
			// 		method: 'DELETE',
			// 		headers: 
			// 		{
			// 		'Access-Control-Allow-Headers':'X-Parse-Master-Key',
			// 		'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
			// 		'X-Parse-Master-Key':'RimX8mdckOrB1iIOuMrPBscMORg714bJHt7HNyJi',
			// 		},
			// 	}).then(function(res) {
		 //   			return res;
			// 	});
			// },
			// files: function(){
			// 	// console.log('http://127.0.0.1:3000/add?name='+ name +'&content=' + content);
			// 	return $http({ 		
			// 		url:('http://files.parsetfss.com/94c0de81-23b3-4a8c-842f-d063b93005c3'),
			// 		method: 'get',
			// 		headers: 
			// 		{
			// 		'Access-Control-Allow-Origin':'*',
			// 		'X-Parse-Application-Id':'34sghQR7LXBwNJfUBuJ5zBowHbRf450n50jGozl8', 
			// 		'X-Parse-REST-API-Key':'90AEj0V5L6WtvPLdHn6aQdIlWZxMYRDWmkpYEoMg',
			// 		// 'X-Parse-Master-Key':'RimX8mdckOrB1iIOuMrPBscMORg714bJHt7HNyJi'
			// 		},
			// 	}).then(function(res) {	
		 //            return res;
			// 	});
			// },


