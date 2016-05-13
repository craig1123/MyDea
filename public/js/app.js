angular.module('mIdea', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider) {

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
  }).state('invest', {
    url: '/invest',
    templateUrl: './../views/invest.html'
  }).state('giveBack', {
    url: '/giveback',
    templateUrl: './../views/giveBack.html'
  })
  $urlRouterProvider.otherwise('/home');
})
