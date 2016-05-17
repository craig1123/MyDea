angular.module('mIdea')
.service('ideaServ', function ($http) {
  
  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };

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
