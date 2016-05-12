angular.module('mIdea')
.controller('homeCtrl', function ($scope, homeServ) {

  $scope.getIdeas = function () {
    homeServ.get().then(function (results) {
      $scope.ideas = results;
    })
  }
  $scope.getIdeas();
})
