angular.module("mIdea")
.controller("settingsCtrl", function($scope, user, settingsServ) {

  $scope.user = user

  $scope.logout = function () {
    settingsServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.getIdeaByUser = function () {
    settingsServ.getIdeaByUser($scope.user._id).then(function (results) {
      console.log(results);
      $scope.userIdeas = results
    })
  }
  $scope.getIdeaByUser();


});
