angular.module('mIdea')
.controller('ideaIdCtrl', function ($scope, user, idea) {
  $scope.user = user;
  $scope.idea = idea[0];


})
