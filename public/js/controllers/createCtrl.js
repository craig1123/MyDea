angular.module('mIdea')
.controller('createCtrl', function ($scope, $state, createServ, user) {

  $scope.user = user;

  $scope.postIdea = function (idea) {
    createServ.postIdea(idea)
    .then(function (res) {
      $state.go('ideas')
    })
  }

  $scope.logout = function () {
    createServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $(document).ready(function () {
    //title
    $('#title').on('mouseenter', function () {
      $('.input-title').show(100);
    }).on('mouseleave', function () {
      $('.input-title').hide();
    })
    $('#title').focus(function () {
      $('.input-title').show(100);
    }).focusout(function () {
        $('.input-title').hide();
      })

      //description
    $('#description').on('mouseenter', function () {
      $('.input-description').show(100);
    }).on('mouseleave', function () {
      $('.input-description').hide();
    })
    $('#description').focus(function () {
      $('.input-description').show(100);
    }).focusout(function () {
      $('.input-description').hide();
    })

    //what
    $('#what').on('mouseenter', function () {
      $('.input-what').show(100);
    }).on('mouseleave', function () {
      $('.input-what').hide();
    })
    $('#what').focus(function () {
      $('.input-what').show(100);
    }).focusout(function () {
      $('.input-what').hide();
    })

    //how
    $('#how').on('mouseenter', function () {
      $('.input-how').show(100);
    }).on('mouseleave', function () {
      $('.input-how').hide();
    })
    $('#how').focus(function () {
      $('.input-how').show(100);
    }).focusout(function () {
      $('.input-how').hide();
    })

    //why
    $('#why, .popup-box-two, #why-pop').on('mouseenter', function () {
      $('.input-why').show(100);
    }).on('mouseleave', function () {
      $('.input-why').hide();
    })
    $('#why, .popup-box-two, #why-pop').focus(function () {
      $('.input-why').show(100);
    }).focusout(function () {
        $('.input-why').hide();
      })

    })

})
