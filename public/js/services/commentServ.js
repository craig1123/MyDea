angular.module('mIdea')
.service('commentServ', function ($http) {

      this.getIdeas = function () {
        return $http.get('/api/ideas').then(function (response) {
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
      this.getComments = function () {
        return $http({
          method: "GET",
          url: '/api/comments'
        }).then(function (res) {
          console.log(res);
          return res.data;
        })
      };
      this.postComment = function (comment) {
        return $http.post('/api/comment', comment)
        .then(function (response) {
          return response.data
        })
      }
})
