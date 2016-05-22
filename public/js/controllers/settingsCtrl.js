angular.module("mIdea")
.controller("settingsCtrl", function($scope, $state, user, settingsServ) {

  $scope.user = user;



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
    console.log(this.idea.viewable);
    // if (this.idea.viewable === false) {
    //   //chage background-color of div
    // }
    // else if (this.idea.viewable === true) {
    //   //change div back to normal
    // }
    settingsServ.toggleIdea(this.idea).then(function () {
    })
  }

  $scope.trashIdea = function () {
    this.idea.trash = true;
    console.log(this.idea.trash);
    settingsServ.updateTrash(this.idea).then(function () {
      $state.reload();
    })
  }




});
