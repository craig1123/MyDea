angular.module('mIdea')
.controller('signupCtrl', function ($scope, $state, mainService) {


  $scope.register = function(password, repassword) {
    if (password !== repassword) {
        alert('Your passwords do not match')
      }
    else {
      mainService.register($scope.newUser).then(function(response) {
          $state.go('profile');
      });
    }
  };

})
