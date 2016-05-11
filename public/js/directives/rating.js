angular.module('mIdea')
.controller('ratingCtrl', function ($scope) {
  console.log('rating hit');
  $scope.rate = 1;
  $scope.max = 10;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
  {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
  {stateOn: 'glyphicon-heart'},
  {stateOff: 'glyphicon-off'}
  ];

});

// <div class="card-rating">
//   <h4>Rate the mIdea</h4>
//   <uib-rating ng-model="rate" max="max" on-hover="hoveringOver(value)" on-leave="overStar = null" titles="['one','two','three']" aria-labelledby="default-rating"></uib-rating>
//   <span class="label" ng-class="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}" ng-show="overStar">
//     {{percent}}%
//   </span>
// </div>
