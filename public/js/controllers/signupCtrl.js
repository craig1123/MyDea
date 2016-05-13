angular.module('mIdea')
.controller('signupCtrl', function ($scope, mainService) {


  $scope.register = function(name, email, password, repassword) {
    if (!name) {
        alert('Please enter a name');
      }
    else if (!email) {
        alert('Please enter a valid email.');
      }
    else if (!password) {
        alert('Please enter a password.');
    }
    else if (password !== repassword) {
      alert('Your passwords do not match')
    }
    else if (name && email && password && repassword) {

      mainService.register($scope.newUser).then(function(response) {
          console.log(response.data);
      });
    }
  };

})
