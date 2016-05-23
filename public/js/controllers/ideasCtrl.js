angular.module('mIdea')
.controller('ideasCtrl', function($scope, $state, user, ideaServ, $log) {

  $scope.user = user;


  $scope.currentPage = 1;
  $scope.itemsPerPage = 25;
  $scope.maxSize = 5; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };


// $scope.setItemsPerPage = function(num) {
//   $scope.itemsPerPage = num;
//   $scope.currentPage = 1; //reset to first page
// };

  $scope.logout = function () {
    ideaServ.logout().then(function(response) {
      $state.go('logout');
    });
  };


  $scope.getIdeas = function() {
      ideaServ.getIdeas().then(function(results) {
        $scope.mostRecent = results;
        $scope.filteredlist = $scope.mostRecent
          $scope.totalItems = results.length;

          $scope.nonShuffleIdeas = results;
          var ideas = [];
          for (var i = 0; i < results.length; i++) {
              ideas.push(results[i]);
          }
          $scope.shuffleIdeas = $scope.shuffle(ideas);
          $scope.highestRating($scope.nonShuffleIdeas);
      })
  }
  $scope.getIdeas();

  $scope.shuffle = function(array) {
      var m = array.length,
          t, i;
      // While there remain elements to shuffle…
      while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
      };
      return array;
  };
  $scope.highestRating = function(array) {
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
      $scope.nonShuffleIdeas = array;
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
}).filter('pagination1', function() {
	  return function(input, currentPage, pageSize) {
	    if(angular.isArray(input)) {
	      var start = (currentPage-1)*pageSize;
	      var end = currentPage*pageSize;
	      return input.slice(start, end);
	    }
	  };
	});
