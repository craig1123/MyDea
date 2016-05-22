angular.module('mIdea')
.controller('ideaIdCtrl', function ($scope, $state, user, idea, ideaIdServ) {
  $scope.user = user;
  $scope.idea = idea[0];

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


  $scope.addComment = function(id, newComment) {
    newComment.user = $scope.user._id;
     $scope.idea.comments.push(newComment)
     $scope.comments = $scope.idea.comments;
       ideaIdServ.postComment(id, newComment).then(function(){
         newComment.user = $scope.user;
         newComment.date = new Date();
         $scope.newComment = {};
      })
     }

  $scope.updateIdea = function(id, rating) {
      ideaIdServ.updateIdea(id, rating).then(function(res) {
      })
  }

})
