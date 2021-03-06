angular.module('mIdea')
    .controller('loginCtrl', function($scope, mainServ, $state) {

        $scope.login = function(email, password) {
            if (!email) {
                alert('Please enter a valid email.');
            } else if (!password) {
                alert('Please enter a password.');
            } else if (email && password) {

                mainServ.login($scope.credentials).then(function(response) {
                    $state.go('profile');
                })
            }
        }

    })
