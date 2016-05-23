angular.module("mIdea")
.controller("settingsCtrl", function($scope, $state, user, settingsServ) {

  $scope.user = user;
  $scope.changeBack = 'settings-card-background';


  $scope.logout = function () {
    settingsServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.avg = function (arry){
    if(!arry || arry.length==0){
      return 0;
    }
    return arry.reduce(function(tot,x){return x+tot},0)/arry.length;
  }

  $scope.getIdeaByUser = function () {
    settingsServ.getIdeaByUser($scope.user._id).then(function (results) {
      $scope.userIdeas = results
    });
  };
  $scope.getIdeaByUser();

  $scope.toggleIdea = function () {
    this.idea.viewable = !this.idea.viewable;
    if ($scope.changeBack === 'settings-card-background') {
      $scope.changeBack = 'settings-card-background2'
    }
    else if ($scope.changeBack === 'settings-card-background2') {
      $scope.changeBack = 'settings-card-background';
    }

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
