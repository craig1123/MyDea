angular.module('mIdea')
.controller('profileCtrl', function ($scope, user, mainService, $state) {

  $scope.user = user;

  $scope.logout = function () {
    mainService.logout().then(function(response) {
      $state.go('login');
    });
  };



})
