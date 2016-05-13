angular.module('mIdea')
.controller('ratingCtrl', function ($scope) {
  $scope.rate = 1;
  $scope.max = 10;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.fraction = 10 * (value / $scope.max);
  };

  $scope.ratingStates = [
  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  {stateOff: 'glyphicon-off'}
  ];

});
