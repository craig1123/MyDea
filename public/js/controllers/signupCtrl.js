angular.module('mIdea')
.controller('signupCtrl', function ($scope, $state, mainServ) {


  $scope.register = function(password, repassword) {
    if (password !== repassword) {
        alert('Your passwords do not match')
      }
    else {
      mainServ.register($scope.newUser).then(function(response) {
        $state.reload();
          $state.go('login');
      });
    }
  };

})
