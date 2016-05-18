angular.module('mIdea')
.controller('searchCtrl', function ($scope, mainServ) {

$scope.ideas = []

  $scope.queryIdeas = function(search) {
    if (search) {
      mainServ.getIdeasQuery(search).then(function(results) {
        $scope.ideas = results;
        var search = [];
        for (var i = 0; i < results.length; i++) {
            search.push(results[i]);
        }
        $scope.avgRating($scope.ideas);
      })
    } else {
      $scope.ideas = [];
    }

    }
    $scope.avgRating = function(array) {
        for (var i = 0; i < array.length; i++) {
            var total = 0;
            var number = array[i].rating.length;
            for (var j = 0; j < array[i].rating.length; j++) {
                total += parseInt(array[i].rating[j], 10);
            }
            var avg = total / number;
            if (!avg) {
              avg = 0;
            }
            array[i].avg = avg;

        }
        array = bubbleSort(array);
        $scope.ideas = array;
    }
    function bubbleSort(theArray) {
      for (var i = theArray.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (theArray[j + 1].avg > theArray[j].avg) {
                var temp = theArray[j];
                theArray[j] = theArray[j + 1];
                theArray[j + 1] = temp;
            }
        }
      }
        return theArray;
    }
});
