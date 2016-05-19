angular.module('mIdea')
.controller('ideaIdCtrl', function ($scope, $state, user, idea, commentServ) {
  $scope.user = user;
  $scope.idea = idea[0];
  console.log(idea);

  $scope.rate = 0;
  $scope.max = 10;
  function avg (arry){
    if(!arry || arry.length==0){
      return 0;
    }
    return arry.reduce(function(tot,x){return x+tot},0)/arry.length;
  }

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.fraction = 10 * (value / $scope.max);
  };

  $scope.idea.avg = avg($scope.idea.rating)

  $scope.ratingStates = [
  {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  {stateOff: 'glyphicon-off'}
  ];


  $scope.addComment = function(newComment) {
    newComment.user = $scope.user._id;
     $scope.idea.comments.push(newComment)
     $scope.comments = $scope.idea.comments;
       commentServ.postComment($scope.idea).then(function(){
         newComment.user = $scope.user;
         newComment.date = new Date();
         $scope.newComment = {};
      })
     }

//  $scope.getComments = function () {
//    commentServ.getComments().then(function(res) {
//      console.log(res);
//      $scope.comments = res;
//    })
//  }
// $scope.getComments();

  $scope.updateIdea = function(id, rating) {
      commentServ.updateIdea(id, rating).then(function(res) {
      })
  }

  // $scope.getIdeas = function() {
  //     commentServ.getIdeas().then(function(results) {
  //         $scope.mideas = results;
  //         var ideas = [];
  //         for (var i = 0; i < results.length; i++) {
  //             ideas.push(results[i]);
  //         }
  //         $scope.highestRating($scope.mideas);
  //     })
  // }
  // $scope.getIdeas();
  // $scope.highestRating = function(array) {
  //     for (var i = 0; i < array.length; i++) {
  //         var total = 0;
  //         var number = array[i].rating.length;
  //         for (var j = 0; j < array[i].rating.length; j++) {
  //             total += parseInt(array[i].rating[j], 10);
  //         }
  //         var avg = total / number;
  //         if (!avg) {
  //           avg = 0;
  //         }
  //         array[i].avg = avg;
  //       }
  //     array = bubbleSort(array);
  //     $scope.mideas = array;
  // }


})
