angular.module('mIdea')
.service('homeServ', function ($http) {

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
      
})
