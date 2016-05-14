angular.module('mIdea', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: './../views/home.html'
  }).state('login', {
      url: '/login',
      controller: 'loginCtrl',
      templateUrl: './../views/login.html'
  }).state('signUp', {
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: './../views/signUp.html'
  }).state('create', {
      url: '/create',
      controller: 'createCtrl',
      templateUrl: './../views/create.html'
  }).state('ideas', {
      url: '/ideas',
      templateUrl: './../views/ideas.html'
  }).state('trash', {
      url: '/ideas/trash',
      templateUrl: './../views/trashIdeas.html'
  }).state('collaborate', {
      url: '/collaborate',
      templateUrl: './../views/collaborate.html'
  }).state('profile', {
      url: "/logged-in",
      templateUrl: "./../views/loggedIn.html",
      controller: 'profileCtrl',
      resolve: {
        user: function(mainService, $state) {
          return mainService.getUser().then(function(response) {
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
    });

});
