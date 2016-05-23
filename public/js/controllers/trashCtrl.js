angular.module('mIdea')
.controller('trashCtrl', function($scope, $state, user, trashServ) {

  $scope.user = user;

  $scope.logout = function () {
    trashServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.avg = function (arry){
    if(!arry || arry.length==0){
      return 0;
    }
    return arry.reduce(function(tot,x){return x+tot},0)/arry.length;
  }


  $scope.getTrash = function () {
    trashServ.getIdeas().then(function (response) {
      $scope.trashed = response;
      var slides = [];
      for (var i = 0; i < response.length/9; i++) {
          var slide = {};
          slide.id = i
          slide.ideas = response.slice(i*9,i*9+9);
          slides.push(slide);
      }
      $scope.slides = slides;
    })
  }
  $scope.getTrash();







});
