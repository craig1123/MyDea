angular.module('mIdea')
.service('trashServ', function ($http) {


  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/logout',
    }).then(function(response) {
      return response;
    });
  };

  this.getIdeas = function () {
    return $http.get('/api/ideas?trash=true').then(function (response) {
        return response.data
      });
  };

  this.updateTrash = function (idea) {
    return $http({
      method: "PUT",
      url: "/api/ideas/trash/" + idea._id,
      data: {trash: idea.trash}
    }).then(function (res) {
      return res.data
    })
  };



})
