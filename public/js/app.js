angular.module('mIdea', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: './../views/guest/home.html'
  }).state('login', {
      url: '/login',
      controller: 'loginCtrl',
      templateUrl: './../views/guest/login.html'
  }).state('signUp', {
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: './../views/guest/signUp.html'
  }).state('logout', {
      url: '/logout',
      controller: 'logoutCtrl',
      templateUrl: './../views/member/logout.html'
  }).state('create', {
      url: '/create',
      controller: 'createCtrl',
      templateUrl: './../views/member/create.html'
  }).state('ideas', {
      url: '/ideas',
      templateUrl: './../views/member/ideas.html'
  }).state('trash', {
      url: '/ideas/trash',
      templateUrl: './../views/member/trashIdeas.html'
  }).state('collaborate', {
      url: '/collaborate',
      templateUrl: './../views/member/collaborate.html'
  }).state('profile', {
      url: "/logged-in",
      templateUrl: "./../views/member/loggedIn.html",
      controller: 'mainCtrl',
      resolve: {
        user: function(mainServ, $state) {
          return mainServ.getUser().then(function(response) {
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
    });

});
