angular.module('mIdea')
.controller('trashCtrl', function($scope, $state, user, trashServ) {

  $scope.user = user;

  $scope.logout = function () {
    trashServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.getTrash = function () {
    trashServ.getIdeas().then(function (response) {
      console.log(response);
      $scope.trashed = response;
    })
  }
  $scope.getTrash();


  


});
