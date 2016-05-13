angular.module('mIdea')
    .controller('loginCtrl', function($scope, mainService, $state) {

  $scope.login = function(email, password) {
      if (!email) {
          alert('Please enter a valid email.');
      } else if (!password) {
          alert('Please enter a password.');
      } else if (email && password) {

          mainService.login($scope.credentials).then(function(response) {
            console.log(response.data);
            $state.go('profile');
          })
        }
    }

})
