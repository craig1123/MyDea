angular.module('mIdea')
.controller('createCtrl', function ($scope, $state, createServ) {

  $scope.getIdeas = function () {
    createServ.getIdeas().then(function (results) {
      console.log(results);
      $scope.ideas = results;
    })
  }
  $scope.getIdeas();

  $scope.postIdea = function (idea) {
    createServ.postIdea(idea)
    .then(function (res) {
      $state.go('ideas')
    })
  }



})
