angular.module('mIdea', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

var userResolve = {
    user: function(mainServ, $state) {
      return mainServ.getUser().then(function(response) {
        return response.data;
      }).catch(function(err) {
        $state.go('login');
      });
    }
  }

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
      templateUrl: './../views/member/logout.html',
      resolve: userResolve
  }).state('create', {
      url: '/create',
      controller: 'createCtrl',
      templateUrl: './../views/member/create.html',
      resolve: userResolve
  }).state('ideas', {
      url: '/ideas',
      controller: 'ideasCtrl',
      templateUrl: './../views/member/ideas.html',
      resolve: userResolve
  }).state('trash', {
      url: '/ideas/trash',
      templateUrl: './../views/member/trashIdeas.html',
      resolve: userResolve
  }).state('collaborate', {
      url: '/collaborate',
      controller: 'collaborateCtrl',
      templateUrl: './../views/member/collaborate.html',
      resolve: userResolve
  }).state('profile', {
      url: "/logged-in",
      templateUrl: "./../views/member/loggedIn.html",
      controller: 'mainCtrl',
      resolve: userResolve
    }).state('ideaId', {
        url: '/ideas/:id',
        controller: 'ideaIdCtrl',
        templateUrl: './../views/member/ideaId.html',
        resolve: {
          idea: function (ideaServ, $stateParams) {
            return ideaServ.getIdea($stateParams.id);
          },
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
