angular.module('mIdea')
.controller('ideaIdCtrl', function ($scope, user, idea, homeServ) {
  $scope.user = user;
  $scope.idea = idea[0];

  $scope.rate = 0;
  $scope.max = 10;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.fraction = 10 * (value / $scope.max);
  };

  $scope.ratingStates = [
  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  {stateOff: 'glyphicon-off'}
  ];

  $scope.updateIdea = function(id, rating) {
      homeServ.updateIdea(id, rating).then(function(res) {
      })
  }


})
