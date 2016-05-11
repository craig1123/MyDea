angular.module('myDea')
.controller('loginCtrl', function ($scope) {

  $scope.login = function(email, password) {
      if (!email) {
          alert('Please enter a valid email.');
        }
      else if (!password) {
          alert('Please enter a password.');
      }
      else if (email && password) {
            // loginServ.sendEmail(email, password);
            $scope.email = '';
            $scope.password = '';

            //redirect to home
          }
      }

})
