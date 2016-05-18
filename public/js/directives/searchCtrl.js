angular.module('mIdea')
.controller('searchCtrl', function ($scope, mainServ) {
  $scope.getIdeas = function() {
      mainServ.getIdeas().then(function(results) {
        // $scope.getResults = results;

      })
    }
  $scope.getIdeas();


});
