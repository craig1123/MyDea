angular.module('mIdea')
.controller('logoutCtrl', function($scope, $state, $timeout, user) {

  $scope.user = user;

    $timeout(function() {
      $state.go('login');
    }, 2000);

})
