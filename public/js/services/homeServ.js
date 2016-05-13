angular.module('mIdea')
.service('homeServ', function ($http) {

      this.getIdeas = function () {
        return $http.get('/api/ideas').then(function (response) {
            return response.data
          });
      },
      this.updateIdea = function () {
        return $http.update('/api/idea/' + id).then(function (res) {
          console.log(res);
          return res.data
        })
      }
      this.delete = function (id) {
        return $http.delete('/api/ideas/' + id).then(function (response) {
            return response.data
          });
      }


})
