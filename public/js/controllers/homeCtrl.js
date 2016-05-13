angular.module('mIdea')
    .controller('homeCtrl', function($scope, homeServ) {

        $scope.getIdeas = function() {
            homeServ.getIdeas().then(function(results) {
                $scope.nonShuffleIdeas = results;
                var ideas = [];
                for (var i = 0; i < results.length; i++) {
                    ideas.push(results[i]);
                }
                $scope.shuffleIdeas = $scope.shuffle(ideas);
            })
        }
        $scope.getIdeas();


        $scope.updateIdea = function(id) {
            homeServ.updateIdea(id).then(function(res) {
                console.log(res);
            })
        }


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
                var number = array.length
                for (var j = 0; j < array[i].length; j++) {
                    total += array[i].rating[j]
                }
                var avg = total / number;
                array[i].avg = avg;
            }
            array = bubbleSort(array);
            $scope.nonShuffleIdeas = array.splice(0, 3);
        }

        function bubbleSort(theArray) {
          for (var i = theArray.length; i >= 0; i--) {
            for (var j = 0; j <= i; j++) {
                if (theArray[j + 1].rating < theArray[j].rating) {
                    var temp = theArray[j];
                    theArray[j] = theArray[j + 1];
                    theArray[j + 1] = temp;
                }
            }
          }
            return theArray;
        }

    })
