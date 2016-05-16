angular.module('mIdea')
.controller('createCtrl', function ($scope, $state, createServ, user) {

  $scope.user = user;

  $scope.postIdea = function (idea) {
    createServ.postIdea(idea)
    .then(function (res) {
      $state.go('ideas')
    })
  }

  // $scope.getIdeas = function () {
  //   createServ.getIdeas().then(function (results) {
  //     console.log(results);
  //     $scope.ideas = results;
  //   })
  // }
  // $scope.getIdeas();

  $(document).ready(function () {
    $('#title').on('mouseenter', function () {
      $('.input-title').show(100);
    }).on('mouseleave', function () {
      $('.input-title').hide();
    })
    $('#description').on('mouseenter', function () {
      $('.input-description').show(100);
    }).on('mouseleave', function () {
      $('.input-description').hide();
    })
    $('#what').on('mouseenter', function () {
      $('.input-what').show(100);
    }).on('mouseleave', function () {
      $('.input-what').hide();
    })
    $('#how').on('mouseenter', function () {
      $('.input-how').show(100);
    }).on('mouseleave', function () {
      $('.input-how').hide();
    })
    $('#why, .popup-box-two, #why-pop').on('mouseenter', function () {
      $('.input-why').show(100);
    }).on('mouseleave', function () {
      $('.input-why').hide();
    })
  })


})
