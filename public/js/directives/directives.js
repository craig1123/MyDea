angular.module('mIdea')
  .directive("navBar", function () {
    return {
      restrict: "EA",
      templateUrl: "./js/directives/navBar.html"
    }
  })
  .directive("vidHead", function () {
    return {
      restrict: "EA",
      templateUrl: "./js/directives/vidHead.html"
    }
  })
  .directive("footbar", function () {
    return {
      restrict: "EA",
      templateUrl: "./js/directives/footbar.html"
    }
  })
  .directive("ideacard", function () {
    return {
      restrict: "EA",
      controller: "ratingCtrl",
      templateUrl: "./js/directives/ideaCard.html",
      scope: {
        idea: "="
      }
    }
  })
  .directive('myDraggable', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);
