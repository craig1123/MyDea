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
  this.getIdea = function (id) {
    return $http.get('/api/ideas?_id=' + id).then(function (response) {
      return response.data
    });
  }
  this.getIdeas = function () {
    return $http.get('/api/ideas?viewable=true?trash=false').then(function (response) {
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
