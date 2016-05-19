angular.module("mIdea")
.controller("settingsCtrl", function($scope, user) {

  $scope.user = user

  $scope.logout = function () {
    ideaServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

});
