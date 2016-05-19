angular.module('mIdea')
.controller('ideaIdCtrl', function ($scope, user, idea, commentServ) {
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


  $scope.addComment = function(comment) {
     if($scope.txtcomment !=''){
       commentServ.postComment(comment).then(function(res){
         $scope.txtcomment = "";
      })
     }
 }

 $scope.getComments = function () {
   commentServ.getComments().then(function(res) {
     console.log(res);
     $scope.comments = res;
   })
 }


  $scope.updateIdea = function(id, rating) {
      commentServ.updateIdea(id, rating).then(function(res) {
      })
  }

  $scope.getIdeas = function() {
      commentServ.getIdeas().then(function(results) {
          $scope.mideas = results;
          var ideas = [];
          for (var i = 0; i < results.length; i++) {
              ideas.push(results[i]);
          }
          $scope.highestRating($scope.mideas);
      })
  }
  $scope.getIdeas();
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
      $scope.mideas = array;
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

})
