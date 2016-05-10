angular.module('myDea')
.controller('signupCtrl', function ($scope/*, signupServ*/) {



$scope.signup = function(name, email, password, repassword) {
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
          // signupServ.sendEmail(name, email, password);
          $scope.email = '';
          $scope.name = '';
          $scope.password = '';
          $scope.repassword = '';

          //redirect to home
        }
    }
})
