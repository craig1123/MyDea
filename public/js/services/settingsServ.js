angular.module("mIdea")
.service("settingsServ", function($http) {

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
  this.getIdeaByUser = function (id) {
    return $http.get('/api/ideas?user=' + id).then(function (response) {
      return response.data
    });
  }

  this.hideIdea = function (idea) {
    return $http({
      method: "PUT",
      url: "/api/ideas/" + idea._id,
      data: idea
    }).then(function (response) {
      return response.data
    })
  }

  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/users'
    }).then(function(response) {
      return response;
    });
  };

  this.getUser = function (id) {
    return $http.get('/users?_id=' + id).then(function (response) {
      return response.data
    });
  };


  this.updateUser = function(id, collection) {
    return $http({
      method: 'PUT',
      url: "/users/" + id,
      data: collection
    }).then(function(response) {
      return response;
    });
  };




})
