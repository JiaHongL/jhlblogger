var myApp = angular.module('myApp', ['ui.router','ui.tinymce','readMore','ngSanitize','angulartics', 'angulartics.google.analytics']); 

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl'
        })
        .state('backstage', {
            url: '/backstage',
            templateUrl: 'views/backstage.html',
            controller: 'backstageCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
         .state('insert', {
            url: '/insert',
            templateUrl: 'views/insert.html',
            controller: 'insertCtrl'
        })
          .state('photo', {
            url: '/photo',
            templateUrl: 'views/photo.html',
            controller: 'photoCtrl'
        })
          .state('edit', {
            url: '/edit',
            templateUrl: 'views/edit.html',
            controller: 'editCtrl'
        })
          .state('edit_about', {
            url: '/edit_about',
            templateUrl: 'views/edit_about.html',
            controller: 'edit_aboutCtrl'
        })
          .state('class_page', {
            url: '/class_page/:class',
            templateUrl: 'views/class_page.html',
            controller: 'class_pageCtrl'
        })
          .state('read_article', {
            url: '/read_article/:id',
            templateUrl: 'views/read_article.html',
            controller: 'read_articleCtrl'
        })
          .state('all_article_list', {
            url: '/all_article_list',
            templateUrl: 'views/all_article_list.html',
            controller: 'all_article_listCtrl'
        })
          .state('message', {
            url: '/message',
            templateUrl: 'views/message.html',
            controller: 'messageCtrl'
        })
          
});