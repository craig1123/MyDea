angular.module('mIdea')
.controller('logoutCtrl', ['$scope', '$state', '$timeout',
function($scope, $state, $timeout) {

    $timeout(function() {
      $state.go('login');
    }, 2000);

}])
