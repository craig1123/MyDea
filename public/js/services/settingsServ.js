angular.module("mIdea")
.service("settingsServ", function($http) {

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

  this.deleteUser = function(id) {
    return $http({
      method: 'DELETE',
      url: '/users/' + id
    }).then(function(response) {
      return response;
    });
  };
});
