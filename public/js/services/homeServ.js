angular.module('mIdea')
.service('homeServ', function ($http) {


      this.get = function () {
        return $http.get('/api/ideas').then(function (response) {
            console.log(response.data);
            return response.data
          });
      },
      this.delete = function (id) {
        return $http.delete('/api/ideas' + id).then(function (response) {
            return response.data
          });
      }


})
