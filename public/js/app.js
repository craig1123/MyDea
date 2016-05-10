angular.module('myDea', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: './../views/home.html'
  }).state('login', {
    url: '/login',
    templateUrl: './../views/login.html'
  }).state('signUp', {
    url: '/signup',
    controller: 'signupCtrl',
    templateUrl: './../views/signUp.html'
  }).state('create', {
    url: '/create',
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
