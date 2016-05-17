angular.module('mIdea')
.controller('collaborateCtrl', function($scope, user) {

  $scope.user = user;

  $scope.logout = function () {
    mainServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

})
