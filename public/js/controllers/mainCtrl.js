angular.module('mIdea')
.controller('mainCtrl', function ($scope, user, mainServ, $state) {

  $scope.user = user;

  $scope.logout = function () {
    mainServ.logout().then(function(response) {
      $state.go('logout');
    });
  };

  $scope.getIdeas = function() {
      mainServ.getIdeas().then(function(results) {
          $scope.nonShuffleIdeas = results;
          var ideas = [];
          for (var i = 0; i < results.length; i++) {
              ideas.push(results[i]);
          }
          $scope.shuffleIdeas = $scope.shuffle(ideas);
          $scope.findTopThree($scope.nonShuffleIdeas);
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

  $scope.findTopThree = function(array) {
      for (var i = 0; i < array.length; i++) {
          var total = 0;
          var number = array[i].rating.length;
          for (var j = 0; j < array[i].rating.length; j++) {
              total += parseInt(array[i].rating[j], 10);
          }
          var avg = total / number;
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


  // var socket = io();
  //
  // $('form').submit(function () {
  //   socket.emit('partner', $('#m').val());
  //   $('#m').val('');
  // })
  // socket.on("response", function (msg) {
  //   $('#messages').append($('<li>'))
  // })

})
