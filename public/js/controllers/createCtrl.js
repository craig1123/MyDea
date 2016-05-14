angular.module('mIdea')
.controller('createCtrl', function ($scope, $state, createServ) {

  // $scope.getIdeas = function () {
  //   createServ.getIdeas().then(function (results) {
  //     console.log(results);
  //     $scope.ideas = results;
  //   })
  // }
  // $scope.getIdeas();

  $scope.postIdea = function (idea) {
    createServ.postIdea(idea)
    .then(function (res) {
      $state.go('ideas')
    })
  }

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
    $('#why').on('mouseenter', function () {
      $('.input-why').show(100);
    }).on('mouseleave', function () {
      $('.input-why').hide();
    })
  })


})
