angular.module("mIdea")
.service("settingsServ", function($http) {


  //logout
  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };

  //ideas
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
  this.toggleIdea = function (idea) {
    return $http({
      method: "PUT",
      url: "/api/ideas/view/" + idea._id,
      data: {viewable: idea.viewable}
    }).then(function (response) {
      return response.data
    })
  }
  this.updateTrash = function (idea) {
    console.log(idea);
    return $http({
      method: "PUT",
      url: "/api/ideas/trash/" + idea._id,
      data: {trash: idea.trash}
    }).then(function (res) {
      return res.data
    })
  };

  //user
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
