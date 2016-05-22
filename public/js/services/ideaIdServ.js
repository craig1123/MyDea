angular.module('mIdea')
.service('ideaIdServ', function ($http) {

//ideas
      this.getIdeas = function () {
        return $http.get('/api/ideas?viewable=true?trash=true').then(function (response) {
            return response.data
          });
      };
      this.updateIdea = function (id, rating) {
        return $http({
          method: "PUT",
          url: "/api/ideas/rating/" + id,
          data: {rating:rating}
        }).then(function (res) {
          return res.data
        })
      };

//comments

      this.postComment = function (id, comments) {
        return $http({
          method: "PUT",
          url: "/api/ideas/" + id,
          data: {comments:comments}
        }).then(function (response) {
          return response.data
        })
      }
})
