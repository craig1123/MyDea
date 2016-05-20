angular.module('mIdea')
.service('ideaIdServ', function ($http) {

//ideas
      this.getIdeas = function () {
        return $http.get('/api/ideas?viewable=true').then(function (response) {
            return response.data
          });
      };
      this.updateIdea = function (id, rating) {
        return $http({
          method: "PUT",
          url: "/api/ideas/" + id,
          data: {rating:rating}
        }).then(function (res) {
          return res.data
        })
      };

//comments
      this.getComments = function () {
        return $http({
          method: "GET",
          url: '/api/comments'
        }).then(function (res) {
          console.log(res);
          return res.data;
        })
      };
      this.postComment = function (idea) {
        return $http({
          method: "PUT",
          url: "/api/ideas/" + idea._id,
          data: idea
        }).then(function (response) {
          return response.data
        })
      }
})
