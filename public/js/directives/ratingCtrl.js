angular.module('mIdea')
.controller('ratingCtrl', function ($scope, homeServ) {
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


  // $scope.getIdeas = function() {
  //     homeServ.getIdeas().then(function(results) {
  //       $scope.overall = results
  //         $scope.average($scope.overall);
  //     })
  // }
  // $scope.getIdeas();
  //
  // $scope.average = function(array) {
  //     for (var i = 0; i < array.length; i++) {
  //         var total = 0;
  //         var number = array[i].rating.length;
  //         for (var j = 0; j < array[i].rating.length; j++) {
  //             total += parseInt(array[i].rating[j], 10);
  //         }
  //         var avg = total / number;
  //         array[i].avg = avg;
  //     }
  //     array = bubbleSort(array);
  // }
  //
  // function bubbleSort(theArray) {
  //   for (var i = theArray.length - 1; i >= 0; i--) {
  //     for (var j = 0; j < i; j++) {
  //         if (theArray[j + 1].avg > theArray[j].avg) {
  //             var temp = theArray[j];
  //             theArray[j] = theArray[j + 1];
  //             theArray[j + 1] = temp;
  //         }
  //     }
  //   }
  //     return theArray;
  // }


});
