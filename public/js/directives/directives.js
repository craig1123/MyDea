angular.module('myDea')
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
