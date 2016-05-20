angular.module("mIdea")
.controller("settingsCtrl", function($scope, $state, user, settingsServ) {

  $scope.user = user

  $scope.logout = function () {
    settingsServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.getIdeaByUser = function () {
    settingsServ.getIdeaByUser($scope.user._id).then(function (results) {
      $scope.userIdeas = results
    });
  };
  $scope.getIdeaByUser();

  $scope.toggleIdea = function () {
    this.idea.viewable = !this.idea.viewable;
    settingsServ.toggleIdea(this.idea).then(function () {

    })
  }

  $scope.trashIdea = function () {
    this.idea.trash = true;
    settingsServ.updateTrash(this.idea).then(function () {
      $state.reload();
    })
  }

});
